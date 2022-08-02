const sass = require('node-sass');
const fs = require('fs');

/**
 * Because of NPM workspaces, the cli can't resolve this import properly
 */
const importer = require('node-sass-import');

sass.render(
  {
    file: 'index.scss',
    importer: importer,
    outFile: 'dist/index.css',
    outputStyle: 'compressed',
  },
  (err, result) => {
    if (!err) {
      fs.mkdirSync('dist');
      fs.writeFileSync('dist/index.css', result.css);
    }
  },
);
