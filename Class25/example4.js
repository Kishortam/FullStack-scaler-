// Q.1
console.log('A');

setTimeout(() => {
    console.log('B');
}, 1000);

setTimeout(() => {
    console.log('C');
},);

Promise
.resolve()
.then(() => console.log('D'));

console.log('E');

// A E D C B  // promise executes first compare to setTimeOut functions, it goes to microtaskQueue




// Q.2
console.log('A');

setTimeout(() => {
    console.log('B');
}, 1000);

setTimeout(() => {
    console.log('C');
},);

Promise
.resolve()
.then(() => {
    setTimeout(() => {
        console.log('D');
    }, 500);
})

console.log('E');

// A E C D B  // because promise has setTimeout function that is why it consider in set time out
// and will execute in time condition. 
