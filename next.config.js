const withMarkdoc = require('@markdoc/next.js');
const markdocOptions = { mode: 'static' };

module.exports =
  withMarkdoc(/* config: https://markdoc.io/docs/nextjs#options */)({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
  });
