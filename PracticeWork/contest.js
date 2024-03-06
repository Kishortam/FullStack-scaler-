// document.getElementById('mylist').addEventListener('click', function(e){
//     console.log(e.target.textContent);
// })

// function debounce(func, delay){
//     let timeoutId;
    
//     return function(){
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(func, delay)
//     };
// }


// const debounceFn = debounce(()=>{
//     console.log("DbC");
// }, 300);


// var textE = document.getElementById("myTEXT");
// console.log(textE.textContent);

// Q.1
function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('done');
        }, ms);
    })
}

async function foo(){
    console.log('start');
    await delay(2000);
    console.log('end');
}
foo();
console.log('after foo'); // start after foo end


// Q.2
class shape{
    constructor(){
        this.name = 'shape';
    }
    getName(){
        return `${this.name}`;
    } 
}

class circle extends shape{
    constructor(){
        super();
        this.radius = 5;
    }
    getName(){
        return super.getName() +'(circle)';
    }
}

const Circle = new circle();
console.log(Circle.getName()); // shape(circle)


// Q.3
const number = 5;

function multipleByTwo(x){
    number = x * 2;
}

multipleByTwo(10);
console.log(number);


// Q.4
function outer(){
    let x = 10;

    function inner(){
        console.log(x);
    }

    x = 20;
    return inner;
}

let closureFunc = outer();
closureFunc();


// Q.5
function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

async function foo(){
    console.log('A');
    await delay(1000);
    console.log('B');
    await delay(2000);
    console.log('C');
}

foo();
console.log('after foo'); // A after_foo B C



// Q.6
function outer(){
    let x = 5;

    return function inner(y){
        x +=y;
        return x;
    }
}

let closureFunc = outer();
console.log(closureFunc(3));
console.log(closureFunc(2));