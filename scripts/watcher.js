const Watcher = require('watch-fs').Watcher;
const processMarkdown = require('./process-markdown');

const watcher = new Watcher({
  paths: ['_content'],
  filters: {
    includeFile(name) {
      return /\.(md|png|svg)?/.test(name);
    }
  }
});

const trigger = () =>
  processMarkdown({ omitSummaryKeys: ['body', 'frontmatter'] });

watcher.on('create', trigger);

watcher.on('change', trigger);

watcher.on('delete', trigger);

watcher.start((err, failed) => {
  console.log('watcher started');
});
