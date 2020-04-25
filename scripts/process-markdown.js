const globby = require('globby');
const del = require('delete');
const path = require('path');
const fs = require('fs');
const promisify = require('pify');
const fm = require('front-matter');
const omit = require('object.omit');
const camelCase = require('camel-case');
const dashify = require('dashify');
const markedAsync = require('marked');
const format = require('prettier').format;
// let's promisify some deps...
const marked = promisify(markedAsync);
const mkdirp = promisify(require('fs-extra').mkdirp);
const pathExists = promisify(require('fs-extra').pathExists);
const copy = promisify(require('fs-extra').copy);
const readFile = promisify(require('fs').readFile);
const writeFile = promisify(require('fs').writeFile);

module.exports = ({
  sourceDir = './_content',
  targetDir = './content',
  omitSummaryKeys,
  omitKeys = ['frontmatter'],
  parseMarkdownForKeys = ['body', 'description', 'text', 'subText']
} = {}) => {
  const parseMarkdownForKeysHtml = parseMarkdownForKeys.map(
    parseMarkdownForKey => `${parseMarkdownForKey}Html`
  );

  // find all md files in sourceDir
  return del
    .promise(
      [
        path.join(process.cwd(), targetDir),
        path.join(process.cwd(), './static/content')
      ],
      { force: true }
    )
    .then(() =>
      globby(path.join(process.cwd(), sourceDir, '/**/*.md'))
        .then(paths =>
          // read all files
          Promise.all(
            paths.map(filename =>
              readFile(filename, 'utf8')
                // parse front matter
                .then((raw, { body, frontmatter, attributes } = fm(raw)) =>
                  Object.assign({}, { body, frontmatter }, attributes)
                )
                // add meta data
                .then(addMetaData(sourceDir, filename))
                // make sure images attribute exists
                .then(normalizeFrontmatterImages)
                // create target paths
                .then(translateImageSources)
                // filter out keys we don't need
                // parse markdown *and* parse images in html
                .then(parseMarkdown(parseMarkdownForKeys))
                // copy those images files to their rightful location
                .then(copyImageFiles(sourceDir, targetDir))
                .then((data, _sources = data._sources) =>
                  Object.assign({}, omit(data, '_sources'), {
                    images: Object.values(_sources.images)
                  })
                )
                // filter out bad keys we don't need
                .then(parsed => omit(parsed, omitKeys))
                // and write to disk
                .then(parsed =>
                  writeFileSafe(
                    path.join(
                      targetDir,
                      parsed.meta.relativeDirectory,
                      `${parsed.meta.slug}.js`
                    ),
                    parsed,
                    true
                  ).then(() => parsed)
                )
            )
          )
        )
        .then(all =>
          writeFileSafe(
            path.join(targetDir, `index.js`),
            createTree(all, { omitSummaryKeys })
          )
        )
    );
};

const copyFileSafe = (source, target) =>
  mkdirp(path.dirname(target)).then(() => copy(source, target));

const writeFileSafe = (file, content, exportTopLevelSeparately) =>
  mkdirp(path.dirname(file)).then(() =>
    writeFile(file, format(micro(content, exportTopLevelSeparately)))
  );

const parseMarkdown = keys => content =>
  Promise.all(
    keys.map(key => {
      if (content[key]) {
        const images = {};
        const renderer = new markedAsync.Renderer();
        renderer.image = (href, title, text) => {
          const translatedHref = translateHref(
            href,
            content.meta.relativeDirectory
          );
          if (translatedHref) {
            images[href] = translatedHref;
          }

          return `<img src="${
            translatedHref ? `/${translatedHref}` : href
          }" alt="${text}"${title ? ` title="${title}"` : ``}/>`;
        };
        return marked(content[key], { renderer }).then(contentHtml => ({
          html: { [`${key}Html`]: contentHtml },
          images
        }));
      }
      return Promise.resolve({});
    })
  ).then(results =>
    Object.assign({}, content, ...results.map(result => result.html), {
      _sources: Object.assign({}, content._sources, {
        images: Object.assign(
          {},
          content._sources.images,
          results
            .map(({ images }) => images)
            .filter(images => images)
            .reduce(
              (imagesObject, singleImageObject) =>
                Object.assign({}, imagesObject, singleImageObject),
              {}
            )
        )
      })
    })
  );

const copyImageFiles = (sourceDir, targetDir) => data =>
  Promise.all(
    Object.keys(data._sources.images).map(href => {
      const source = path.join(sourceDir, data.meta.relativeDirectory, href);
      const target = path.join(data._sources.images[href]);
      return pathExists(path.resolve(source)).then(
        (
          doesExist = new Error(
            `Can't find ${path.relative(
              process.cwd(),
              source
            )}, which was referenced in ${path.join(
              sourceDir,
              data.meta.relativeFilename
            )}`
          )
        ) => {
          if (!doesExist) {
            throw new Error(
              `Can't find ${path.relative(
                process.cwd(),
                source
              )}, which was referenced in ${path.join(
                sourceDir,
                data.meta.relativeFilename
              )}`
            );
          } else {
            return copyFileSafe(
              path.resolve(source),
              path.resolve(target)
            ).then((...args) => {
              console.info(`Copied ${source} to ${target}`);
              return { source, target };
            });
          }
        }
      );
    })
  ).then(() => data);

const translateHref = (href = '', relativeDirectory) => {
  let translatedHref;
  if (href && href.indexOf(`./` === 0 || href.indexOf('http') === -1)) {
    return path.join('./static/content', relativeDirectory, href);
  }
};
const addMetaData = (
  sourceDir,
  filename,
  relativeFilename = path.relative(
    path.resolve(process.cwd(), sourceDir),
    filename
  )
) => data =>
  Object.assign({}, data, {
    meta: {
      base: path.basename(filename),
      relativeFilename,
      relativeDirectory: path.dirname(relativeFilename),
      slug: dashify(path.basename(filename, path.extname(filename)))
    }
  });

const normalizeFrontmatterImages = (data, images = data.images) =>
  Object.assign({}, data, {
    images: Array.isArray(images) ? images : [images]
  });

const translateImageSources = (data, images = data.images) =>
  Object.assign({}, data, {
    _sources: Object.assign({}, data._sources, {
      images: data.images.reduce((imageSources, image) => {
        const translatedHref = translateHref(
          image,
          data.meta.relativeDirectory
        );
        if (translatedHref) {
          imageSources[image] = translatedHref;
        }
        return imageSources;
      }, {})
    })
  });

const createTree = (all, { omitSummaryKeys = ['body', 'frontmatter'] } = {}) =>
  all.reduce((tree, parsed) => {
    const current = parsed.meta.relativeDirectory
      .split('/')
      .reduce((current, part, index, collection) => {
        if (!current[part]) {
          current[part] = index === collection.length - 1 ? [] : {};
        }
        return current[part];
      }, tree);

    current.push(
      omit(
        parsed,
        ...omitSummaryKeys.reduce(
          (keys, key) => [...keys, key, `${key}Html`],
          []
        )
      )
    );
    return tree;
  }, {});

const micro = (t, exportTopLevelObjects = false) => {
  const wrap = (str, top) => (top ? `module.exports = ${str};` : str);
  const parse = (t, top = false, exportTopLevelObjects = false) => {
    if (Array.isArray(t)) {
      return wrap(`[${t.map(i => parse(i)).join(',')}]`, top);
    } else if (typeof t === 'string') {
      return wrap(`\`${t.replace(/\n$/, '')}\``, top);
    } else if (t instanceof Object) {
      const objStrings = Object.keys(t).map(k => {
        const v = parse(t[k]);
        if (top && exportTopLevelObjects) {
          return `module.exports.${camelCase(k)}=${v}`;
        }
        return `'${k}': ${v}`;
      });
      if (top && exportTopLevelObjects) {
        return objStrings.join(';\n');
      }
      return wrap(`{${objStrings.join(',')}}`, top);
    }
    return wrap(t, top);
  };

  return parse(t, true, exportTopLevelObjects);
};
