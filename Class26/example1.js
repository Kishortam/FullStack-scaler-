// const { resolve } = require("path");
// const { setTimeout } = require("timers");
// const { promiseHooks } = require("v8");

const list = [{"id":1,"todo":"Do something nice for someone I care about","completed":true,"userId":26},
{"id":2,"todo":"Memorize the fifty states and their capitals","completed":false,"userId":48},
{"id":3,"todo":"Watch a classic movie","completed":false,"userId":4}];

const myFetch = function(delay, limit){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            if(limit > 3){
                reject('not limit');
            }
            else{
                resolve(list.slice(0,limit));
            }
        }, delay)
    })
}

// it keeps counting numbers
// let count = 1;
// setInterval(()=>{
//     console.log(count);
//     count++;
// },1000);


// example 1: it executes parallely, every function executes at their time
//post
const promise1 = myFetch(1000,1);
//user
const promise2 = myFetch(2000,2);
//comment
const promise3 = myFetch(5000,1);


promise1.then((data) => console.log(data));

promise2.then((data) => console.log(data));

promise3.then((data) => console.log(data));



// example 2 : sequential execution
myFetch(1000,1)
    .then((data) =>{
        console.log(data);
        return myFetch(2000, 2);
    })
.then((data) =>{
    console.log(data);
    return myFetch(5000, 1);
})
.then((data) =>{
    console.log(data);
});



// example 3 : here we can get a all the data in a single go at max timeOut
// in promise.all()  all must executes successfully, if anyone fails it results error
Promise.all([myFetch(1000,1), myFetch(2000, 2), myFetch(5000, 1)])
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


// example 4 : it settled all, if anyone fails to execute it still show successful and failed one. 
Promise.allSettled([myFetch(1000,1), myFetch(2000, 2), myFetch(5000, 1)])
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
// only one function will log, which has less time in setTimeout