const processMarkdown = require('./process-markdown');

processMarkdown({ omitSummaryKeys: ['body', 'frontmatter'] })
  .then(() => {
    console.log('done');
  })
  .catch(e => {
    console.log(e);
  });
process.on('exit', () => {
  console.log('Goodbye!');
});
