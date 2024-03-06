//Q.1
console.log('A');
console.log('B');
console.log('C');
// A B C



// Q.2
setTimeout(function(){
    console.log('Z');
}, 1000);

setTimeout(function(){
    console.log('A');
});

console.log('B');

setTimeout(function(){
    console.log('C');
}, 0);
// B A C Z



// Q.3
var isChamp = true;
while(isChamp){
    console.log('Champion');
}

console.log('B');

setTimeout(() => {
    console.log('C');
}, 0);
// 'Champion'....... while, isChamp is always True, it will run till infinity.
// other functions will not run


// Q.4
for(var i = 0; i < 10000; i++){
    console.log('A');
}

console.log('B');

setTimeout(() => {
    console.log('C');
}, 0);
// A A A A.......A B C   // loop will run untill terminate condition and then the next function



// Q.4
setTimeout(() => {
    console.log('C');
}, 0);

for(var i = 0; i < 10000; i++){
    console.log('A');
}

console.log('B');
// A A A A.......A B C   

