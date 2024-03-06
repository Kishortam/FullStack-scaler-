// context

function test(){
    console.log(this);
}

var obj = {
    name : "raaj",
    age : 16,
}

obj.myTest = test; // we are adding a function to object with variable name myTest.
// resulting a window 

// myTest function is added in obj object, we are trying to call function from object
obj.myTest(); // we have given a myTest name to test function, so basically myTest is also a function
// results object


const newTestFn = obj.myTest;
newTestFn(); 
// results window



// explicitely calling a function 
newTestFn.call(obj);  // object






const obj1 = {
    name : "Pranita",
    age : 52,
}

// explicitely calling a function 
newTestFn.call(obj1);  // obj1
//.call : it executes functions then and there


// newTestFn.apply(obj1);
// newTestFn.apply(obj1,[7,8]);







const obj3 = {
    name : "kavya",
    age : 29,
}
const obj4 = {
    name : "sheela",
    age : 35,
}

function greet(){
    console.log(this);
}

obj3.greetFn = greet; // adding greet function into object
obj3.greetFn(); // kavya (obj3)

obj4.greetFn = obj3.greetFn;
obj4.greetFn(); // sheela (obj4)

// if you dont bind, it will result window
const greetFnFromObj2 = obj3.greetFn;
greetFnFromObj3(); // window
 

const greetFnFromObj3 = obj3.greetFn.bind(obj4);
greetFnFromObj3(); // 'sheela' obj4 
// its explicitely says show obj4 










// apply
function test(a,b){
    console.log(a,b,this);
}

var obj = {
    name : "raaj",
    age : 16,
}

obj.myTest = test; 

obj.myTest(2,3);  // 2 3 raaj


const newTestFn = obj.myTest;
newTestFn(4,5);   // 4 5 window object

 
newTestFn.call(obj);  

const obj1 = {
    name : "Pranita",
    age : 52,
}

newTestFn.call(obj1, 9, 10); // 9 10 pranita
newTestFn.apply(obj1,[1,2]);  // 1 2 pranita
