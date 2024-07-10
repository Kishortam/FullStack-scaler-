

// Q.1
console.log(x); // error

// Q.2
y = 1;     // intialized a variable, after hoisting
console.log(y);  // 1  
var y;      // as per hoisting declaration moves to top


// Q.3
console.log(z);  // undefined
var z = 1;   // only declaration var z; is moved to top, else intialization will stay at same place



// Q.4
a = 1;
console.log(a);
let a;
// error


// Q.5
console.log(b);
let b = 1;
// error : b is not defined


// Q.6
console.log(c);
c = 1;
// error : c is not defined, it is going to be a global variable, as it it is not var, let or const.


// Q.7
console.log(sum);

var sum = function(a,b){
    return a + b;
}
// undefined : initialization moves to top, declaration will remain at bottom
// or at same place, also parameters are not mentioned 


// Q.8
    console.log(total);

    let total = function(a,b){
        return a + b;
    }
// error : let will not do hoisting, since its in TDZ it will not execute
// total is not defined before calling a function


// Q.9
console.log(sum1(1,2));

function sum1(a,b){
    return a + b;
}
// 3  // named function hoisted. it goes to top and gets result



// Q.10
function example1(){
    if(true){
        var aa = 1;
        let bb = 2;
    }
    console.log(aa);  // 1
    console.log(bb);  // error // let is blocked scope and connot execute outside of block scope
}
example1();
// error : aa will execute and will return a value but bb will not execute and hence result is error
// var is a function scope, we can use it anywhere in function. but let and const are block scope, cannot use it after a curly braces


// Q.11
var cc = 20;
function example1(){
    if(true){
        var cc = 1;
    }
    console.log(cc);  // 1
}
example1();

console.log(20); // 20
// 1   20




// Q.12
var dd = 20;
function example1(){
    if(true){
        dd = 1;
    }
    console.log(dd);  // 1
}
example1();

console.log(dd); // 1
// 1   1




// Q.13
function parent(){
    var a = 20;
    function child(){
        console.log(a);
    }
    child();
}
parent();
// 20  // function scope




// Q.14
function parent1(){
    var a = 20;
    function child(){
        console.log(a);

        function child2(){
            console.log(a);
        }
    }
    child2(); // error
}
parent1();
// error : child2 is not defined at parent1





// Q.15
function parent2(){
    var a = 20;
    function child(){
        console.log(a);  // 20

        function child2(){
            console.log(a);  // 20
        } 
        child2();   
    }
    child();
}
parent2();
// 20  20


 

// Q.15
function parent2(){
    var a = 20;
    function child(){
        console.log(a);  // undefined

        function child2(){
            console.log(a);  // 10
        } 
        var a = 10;

        child2(); 
    }
    child();
    console.log(a); // 20
}
parent2();
// undefined 10 20 




// Q.16
function parent3(){
    var a = 20;
    function child(){
        console.log(a);  // 20

        function child2(){
            console.log(a);  // undefined
            var a = 30;
        } 
        a = 10;

        child2(); 
    }
    child();
    console.log(a); // 10
}
parent3(); 
// 20 undefined 10


// conversion of above code
function parent3(){
    var a;
    function child(){
        function child2(){
            console.log(a);
            var a = 30;
        }
        console.log(a);
        a = 10;
        child2();
    }
    a = 20;
    child();
    console.log(a);
}
parent3();





// Q.17
function parent4(){
    var a =20;
    function child(){
        let a =10;
        console.log(a);  // 10 from let

        function child2(){
            console.log(a);  // 10   a is not declare, so it takes from let
            a = 30;
        }
        console.log(a);  // 10 from let
        child2();
    }
    child();
    console.log(a);  // 20 from top
}
parent4();
// 10 10 10 20


// Q.17
function parent5(){
    var a =20;
    function child(){
        let a =10;
        console.log(a);  // 10 from let

        function child2(){
            console.log(a);  // 10   a is not declare, so it takes from let
            a = 30;
        }
        child2();
        console.log(a);  // 30 from let
    }
    child();
    console.log(a);  // 20 from top
}
parent5();
// 10 10 30 20












// Assignment
// Q.1
function outer(){
    var x = 10;
    function inner(){
        console.log(x);
    }
    return inner;
}

var closureFunc = outer();
closureFunc();
// 10


// Q.2
function multipleBy(num){
    return function(x){
        return num * x;
    }
}

var multipleByTwo = multipleBy(2);
var result = multipleByTwo(5);

console.log(result);
//10


// Q.3
function add(x){
    return function(y){
        return function(z){
            return x + y + z;
        }
    }
}

var result = add(2)(3)(4);
console.log(result);
// 9



// Q.4 
function outer(){
    var x = 10;
    
    function inner(){
        console.log(x);
    }
    x = 20;
    return inner;
}

var closureFunc = outer();
closureFunc();
// 20



// Q.5
function multipleBy(num){
    return function(x){
        return num * x;
        var num = 2
    }
}

var multipleByTwo = multipleBy(2);
var result = multipleByTwo(5);

console.log(result);
// NaN


// Q.6
function add(x){
    return function(y){
        return function(z){
            return x + y + z;
        }
    }
}

var result = add(2,3)(4);
console.log(result);
// function




// Q.7
function outer(x){
    return function(y){
        return function(z){
            return x + y + z;
        }
    }
}

var result = outer(2)(3)(4);
console.log(result);
// 9


// Q.8
function multipleBy(num){
    return function(x){
        return num * x;
    }
}

var multipleByTwo = multipleBy(2);
var multipleByThree = multipleBy(3);
var result = multipleByTwo(multipleByThree(4));

console.log(result);
// 24



// Q.9
function outer(){
    var x = 10;

    function inner(){
        console.log(x);
        var x = 20;
    }
    return inner;
}

var closureFunc = outer();
closureFunc();
// undefined


// Q.10
function add(x){
    return function(y){
        return function(z){
            return x + y + z;
        }
    }
}

var result = add(2)(3,4);
console.log(result);
// function







// 
function sum(x,y){
    return function(z){
        return function(){
            return x + y + z;
        }
    }
}
console.log(sum(1,2)(3)()); // 6