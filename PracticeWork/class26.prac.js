// example 1

const { error } = require("console");
const { getDefaultResultOrder } = require("dns");
const { resolve } = require("path");

const list = [{"id":1,"todo":"Do something nice for someone I care about","completed":true,"userId":26},
{"id":2,"todo":"Memorize the fifty states and their capitals","completed":false,"userId":48},
{"id":3,"todo":"Watch a classic movie","completed":false,"userId":4}];


const myFetch = function(delay, limit){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(limit > 3){
                reject('no limit');
            }
            else{
                resolve(list.slice(0,limit));
            }
        }, delay);
    })
}

// let count = 1;
// setInterval(() => {
//     console.log(count);
//     count++;
// }, 1000);

// 1. executes parallely
const promise1 = myFetch(1000, 1);
const promise2 = myFetch(2000,2);
const promise3 = myFetch(5000, 1);


promise1.then((data) => console.log(data));

promise2.then((data) => console.log(data));

promise3.then((data) => console.log(data));

// 2. sequential execution
myFetch(1000, 1)
    .then((data)=>{
        console.log(data);
        return myFetch(2000, 2);
    })
    .then((data) =>{
        console.log(data);
        return myFetch(5000,3);    // if its (5000, 4) exceeding 3 limit..it will show error // no further execution
    })
    .then((data) =>{
        console.log(data);
    });



    // 3. we can get a all the data in a single go at max timeOut

    Promise.all([myFetch(1000, 1), myFetch(3000, 2), myFetch(5000, 1)])
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })


    // 4. 
    Promise.allSettled([myFetch(1000, 1), myFetch(3000, 4), myFetch(5000, 1)])
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })



    // example 5 : which one executes faster will show in console
Promise.race([myFetch(2000,2), myFetch(5000, 3), myFetch(1000, 1)])
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})





// try & catch

function getData(){
    try{
        console.log(1);
        console.log(2);
        console.log(3);
        throw new Error("failes");
        console.log(4);
    }
    catch(err){
        console.log(err);
    }
}

getData();