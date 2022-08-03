const sass = require('sass');
const fs = require('fs');

const result = sass.compile('index.scss', {
  loadPaths: ['..'], // loads paths for `design-tokens` exports
  style: 'compressed',
});

if (result) {
  fs.mkdirSync('dist');
  fs.writeFileSync('dist/index.css', result.css);
}
