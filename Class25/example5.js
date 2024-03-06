
const fs = require('fs');

const f1Promise = fs.promises.readFile('f1.txt');
const f2Promise = fs.promises.readFile('f2.txt');

console.log('A');

f1.promise
.then((data) => console.log(data.toString()))
.catch((err) => console.log(err));

console.log('B');

f2.promise
.then((data) => console.log(data.toString()))
.catch((err) => console.log(err));

// the result will not be always in sequence