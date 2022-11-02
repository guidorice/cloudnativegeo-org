const withMarkdoc = require('@markdoc/next.js');
const markdocOptions = { mode: 'static' };

module.exports =
  withMarkdoc({ markdocOptions})({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
  });
