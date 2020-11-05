const fs = require('fs');

const newdir = './src/new-icons/';
const olddir = './src/icons/';

let oldlist;
let newlist;
let diff = [];
let olddiff = [];

newlist = fs.readdirSync(newdir);
oldlist = fs.readdirSync(olddir);

diff = newlist.filter(x => !oldlist.includes(x));
olddiff = oldlist.filter(x => !newlist.includes(x));

fs.writeFileSync('new.json', JSON.stringify(diff));
fs.writeFileSync('present-in-old.json', JSON.stringify(olddiff));
