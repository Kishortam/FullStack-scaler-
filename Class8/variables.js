console.log("Hello");

var name = "Akshay";
console.log(name);

name = "Sagar";
console.log(name);

console.log('1.');
console.log('2.');
console.log('3.');
console.log('4.');
console.log('6.');
var a = 10;
console.log('var a =', a);
console.log('7.');
console.log('8.');
console.log('9.');
var b = 15;
console.log('a & b =', a,b);
var c = a + b;
console.log('a + b =', c );


var d;
console.log(d); // undefined
d = 10;
console.log(d); // 10


// Hoisting: in hoisting variable declaration move to top
// if you are not declaring a variable and you are accesing it, it will show error.


//old
/*
console.log(e,f,g); // u,u,u
var e = 10;
console.log(e,f,g);// 10,u,u
var f;
console.log(e,f,g); // 10, u,u
f = 15;
console.log(e,f,g); // 10,15,u
var g = 20;
console.log(e,f,g); // 10, 15, 20
*/

// new
var e,f,g;
console.log(e,f,g);
e = 10;
console.log(e,f,g);
console.log(e,f,g);
f = 15;
console.log(e,f,g);
g = 20;
console.log(e,f,g);


// Let :
// you can update a let value
let h = 10;
console.log(h);
h = 20;
console.log(h);

// you cannot declare a let with same name.
// let h = 10;
// console.log(h);
// let h = 20;
// console.log(h);

// Let doesn't allow hoisting as var.
// from top till let is declared, the space is called as TDZ (temporary dead zone).
/*
console.log('a');
console.log('b');
console.log(c);
let c = 10;
*/



// CONST :
// const is constant, it also has TDZ

