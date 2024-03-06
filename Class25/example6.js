const fs = require('fs');

const f1Promise = fs.promises.readFile('f1.txt');
const f2Promise = fs.promises.readFile('f2.txt');
const f3Promise = fs.promises.readFile('f3.txt');


f1.promise
.then((data) =>{
    console.log(data.toString());
    return f2Promise;
})
.then((data) =>{
    console.log(data.toString());
    return f3Promise;
})
.catch((err) => console.log(err));

// always gives result in sequence