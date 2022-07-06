const pug = require('pug/*.pug');

// Compile template.pug, and render a set of data
console.log(pug.renderFile('index.pug', {
  name: 'bcc'
}));