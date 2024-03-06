console.log("app.js is connected");

// class : 10 => Functional Programming




// 1. first class function


// function can be assigned to variables
const sum = function(a,b){
    return a + b;
}

// pass function as a arguments
const compute = function(cb){
    console.log(cb);
    cb(10,20);
}

compute(sum);  // sum as a reference







// function can be returned from another function
const multiply = function(a,b,c){
    return a * b * c;
}
// console.log(multiply(10,10)) // to get value of function

const compute1 = function(cb){
    return cb;
}

const multiplyFn = compute1(multiply);
console.log(multiply(1,5,3));





// 2. pure functions
const generatePaneer = function(milk){
    return milk / 4;
}

console.log(generatePaneer(10));
console.log(generatePaneer(20));
console.log(generatePaneer(15));
console.log(generatePaneer(10));



// impure function  // external variables change the result
let water = 1;
const generateCurd = function(milk){
    return (milk - water)/ 3;
}

console.log(generateCurd(10));
water = 2;
console.log(generateCurd(10));
water = 3;
console.log(generateCurd(10));






// 3. immutability

const getTotalBillAmount = (items) =>{
    let total = 0;
    for(let i = 0; i < items.length; i++){
        total += items[i];
    }
    return total;
}

const bills = [100, 200, 100, 400];
console.log(getTotalBillAmount(bills));


// we can change the bill amount array
/* 
const getTotalBillAmount = (items) =>{
    items[1] = 100  // mutating data
    let total = 0;
    for(let i = 0; i < items.length; i++){
        total += items[i];
    }
    return total;
}

const bills = [100, 200, 100, 400];
console.log(getTotalBillAmount(bills));
console.log(bills)  // to see bills array 
*/






// 4.  higher order function  (takes input as function or returns function)
function multiplyer(x){
    return function(y){
        return function(z){
            return x * y * z;
        };
    };
}
console.log(multiplyer(1)(2)(3));





// Q.1 convert lowercase names to uppercase without impacting original data
const names = ['atul', 'ram', 'jai', 'bhumika'];

function convertToUpper(listOfNames){
    const result = [];
    for(let i = 0; i < listOfNames.length; i++){
        result.push(listOfNames[i].toUpperCase());
    }
    return result;
}

console.log(convertToUpper(names));
console.log(names);



// declarative way
function convertToUpper(listOfNames){
    const result = [];
    listOfNames.forEach(function(name, idx){
    result.push(name.toUpperCase());
})
return result;
}

console.log(convertToUpper(names));
console.log(names);










// For Each
// declarative way

const bills1 = [100, 200, 100, 400];

const getTotalBillAmount1 = (items) => {
    let total = 0;
    items.forEach(function(item, index){
        total += item;
    })
    return total;
}

console.log(getTotalBillAmount1(bills1.slice()));






// Mapping

// Q.1 lowercase to uppercase

const listOfNames = ['vijay', 'rohit', 'nayan'];

function convertToUpper(listOfNames){
    const result = listOfNames.map(function(name, idx){
    return name.toUpperCase();
})
return result;
}

console.log(convertToUpper(listOfNames));





// Filter

function filterOut(listOfNames, ch){
    const result = listOfNames.filter(function(item, idx){
    return item.includes(ch);
})
return result;
}

console.log(filterOut(listOfNames, 'y'));






// Reduce
/*
const total = items.reduce(function(acc, item){
    acc += item;
    return acc;
}, 0);

return total;
 */



 const data = [['name', 'rajiv'], ['city', 'mumbai'], ['age',29]];

function convertToObj(arr){
    return arr.reduce(function(acc, items){
        console.log(acc.item);
        const key = item[0];
        const value = item[1];

        acc[key] = val;
        return acc;
    }, {})
}
console.log(convertToObj(data));