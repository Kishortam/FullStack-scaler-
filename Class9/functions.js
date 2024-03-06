// Function

/*
=> Declare
=> Named vs Anonymous function
=> higher order functions
=> pass by value/reference
=> arguments
=> hosting
=> arrow function
*/

function sum(){
    var x = 10;
    var y = 5;
    console.log(x + y);
    return x + y;
}
console.log(sum());



// multiplication function
function multyply(x,y){
    return x * y;
}
console.log(multyply(2,5));



// function using array
function total(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

var arr1 = [1,2,3,4,5];
console.log(arr1);
console.log(total(arr1));

// object, arrays, functions passed by reference

// modificatin in array
function total(arr){
    arr[3] = 10;
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

var arr1 = [1,2,3,4,5];
console.log(arr1);
console.log(total(arr1));







// named function
function multyplier(x,y){
    return x * y;
}
console.log(multyplier(2,5));

// anonymous function
const multiplication = function(x,y){
    return x * y;
}
console.log(multiplication(4,4));



// shortHand / arrow function
var addition = (x,y) => x + y;
console.log(addition(50,20));

// if multiline code is there
var addition1 = (x,y) => {
    return x + y;
}
console.log(addition1(20,3));



// if you have more value than declared
function addition(a,b){
    return a + b;
}
console.log(addition(20,30,40)); // in this case, a(20), b(30) but 40 will not assign to any one