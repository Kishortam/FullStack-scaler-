
//1 Currying
function valume(height){
    return function(breadth){
        return function(width){
            return height * breadth * width;
        }
    }
}
console.log(valume(4)(5)(6));



function vol(h){
    return function(w){
        return function(b){
            return h* w* b;
        }
    }
}

console.log(vol(3)(4)(4));


// 2. infinite currying
function sum(a){
    return function(b){
        if(!b){
            return a;
        }
        return sum(a + b);
    }
}

console.log(sum(1)(2)(3)(4)());



function multi(a){
    return function(b){
        if(!b){
            return a;
        }
        return multi(a*b);
    }
}

console.log(multi(3)(4)(5)());




// 3. closures

function outer(oa){
    function inner(ia){
        return oa + ia;
    }
    return inner;
}

let result = outer(5);




// 4. shallow copy

var originalObj = {
    a : 1,
    b : {
        c : 3,
    }
};

var shallow = {...originalObj};
// making changes

shallow.a = 6; // 
shallow.b.c = 10; // both changes



// 5. deep copy
var originalObj = {
    a : 1,
    b : {
        c : 3,
    }
};

var deep = {...originalObj};




// polyfill for forEach
if(Array.prototype.myforEach){
    Array.prototype.myforEach = function(callback){
        const length = this.length;
        for(var i = 0; i < length; i++){
            callback(this[i], i, this);
        }
    }
}
// to print => [1,2,3,4,5].myForEach(item => console.log(item));


// polyfill for map
if(Array.prototype.myMap){
    Array.prototype.myMap = function(callback){
        var arr = [];
        for(var i = 0; i < this.length; i++){
            arr.push(callback(this[i], i, this));
        }
        return arr;
    }
}


// polyfill for filter
if(Array.prototype.myFilter){
    Array.prototype.myFilter = function(callback){
        var arr = [];
        for(var i = 0; i < this.length; i++){
            const isTrue = callback(this[i], i, this)
            
            if(isTrue){
                arr.push(this[i]);
            }
        }
        return arr;
    }
}


// polyfill for reduce
Array.prototype.myReduce = function(callback, initialValue){
    var accumulator = initialValue;

    for(var i = 0; i < this.length; i++){
        if(accumulator !== undefined){
            accumulator = callback.call(undefined, accumulator, this[i], this, i);
        }
        else{
            accumulator = this[i];
        }
    }
    return accumulator;
}


// polyfill for promiseAll()
const promises = Promise.all([promise1, promise2, promise3]);

function myPromiseAll(taskList){
    
    // to store result
    const results = [];

    // to track how many promises completed
    let promiseCompleted = 0;

    // return new promise
    return new Promise((resolve, reject) =>{
        taskList.myforEach((promise, index)=>{
            // if promise passe
            promise.then((value)=>{
                results[index] = value;
                promiseCompleted +=1;

                // if all the promises are completed
                if(promiseCompleted === taskList.length){
                    resolve(results);
                }
            })
            // if any ppromise fails
            .catch(error => {
                reject(error)
            })
        })
    })
}



// polyfill for deepcopy
const obj = {
    a1 : {
        b1 :{
            c1 : "ss"
        }
    }
}

const deepcopy = (val) => {
    if(["String", "boolean", "number"].includes(typeof val)){
        return val;
    }
    else if(Array.isArray(val)){
        return val.map(item => deepcopy(item))
    }
    else{
        return Object.keys(val).reduce((acc, key) =>{
            acc[key] = deepcopy(val[key]);
            return acc;
        }, {})
    }
    return clone;
}
console.log(deepcopy(obj));





const dp = (val) =>{
    if(["string", "boolean", "number"].includes(typeof val)){
        return val;
    }
    else if(Array.isArray(val)){
        return val.map(item => dp(item))
    }
    else{
        return Object.keys(val).reduce((acc, key) =>{
            acc[key] = dp(val[key])
            return acc;
        },{})
    }
}