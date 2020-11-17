const fs = require('fs');
const dir = './src/icons/';

const list = fs.readdirSync(dir);

list.forEach(item => {
  const file = fs.readFileSync(dir + item, { encoding: 'utf8' });

  const newfile = file.replace(
    "import createSvgIcon from './utils/createSvgIcon';",
    "import { createSvgIcon } from '../IconBase';",
  );

  fs.writeFileSync(dir + item, newfile, { encoding: 'utf8', flag: 'w' });
});
