const fs = require('fs');
const dir = './src/new-icons/';

fs.readdir(dir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach(file => {
    if (file.match(/(Outlined|TwoTone|Rounded|Sharp).js$/)) {
      fs.unlink(dir + file, { force: true }, err => {
        if (err) {
          console.error(err);
          return;
        }
      });
    }
  });
});
