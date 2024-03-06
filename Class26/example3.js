const { type } = require("os");

// topic 1
let a = 12;
if(a){
    console.log('Truthy Value');
}
else{
    console.log('falsy value');
}
// truthy value



// falsy value => 0 null 'undefined'  ' ' false NaN



// topic 2
let b = 1;
let c = '1';
console.log(1 == '1');  // true
console.log(1 === '1');  // false

// to know or get type of
typeof b // number
typeof c // string

let d = {};
let e = [];

typeof d // object          Array.isArray(d) // false
typeof e // object          Array.isArray(e) // true


console.log(1 + '1');  // 11  it concats string
console.log(2 * '2');  // 4   it converts string to number
console.log(2 * 'two');  // NaN

Array.isArray() // to know it is array
isNaN() // to know it is number or not

isNaN(2);  // false
isNaN('2'); // false
