const fs = require('fs');
const path = require('path');

const builtFilename = 'tokens.scss';
const distPath = path.join(__dirname, '../dist');
const writePath = path.join(__dirname, '../');
const filesToImport = fs.readdirSync(distPath).filter((filename) => (
  filename !== builtFilename && filename.endsWith('.scss')
));
const importStatements = filesToImport.map((filename) => `@import "./dist/${filename}";`);

fs.writeFileSync(path.join(writePath, builtFilename), importStatements.join('\n'));
