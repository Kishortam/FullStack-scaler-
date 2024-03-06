// polyfills

// forEach

const arr = [1,2,3,4,5];
arr.forEach((ele) => console.log(ele));

function printEle(el){
    console.log(el);
}



Array.prototype.myForEach = function(cb){
    for(var i = 0; i < this.length; i++){
        cb(this[i], i, this);
    }
}
arr.myForEach(printEle);





// map

const arr1 = [1,2,3,4,5];
// const res = arr1.map((ele) => ele * 2);
// console.log(res);

Array.prototype.myMap = function(cb){
    let output = [];
    for(var i = 0; i < this.length; i++){
        output.push(cb(this[i], i , this))
    }
    return output;
}
// const res1 = arr1.myMap((ele) => ele * 2);
// console.log(res);



// filter
const arr3 = [1,2,3,4,5];
// const res2 = arr3.filter((ele) => ele > 2);
// console.log(res2); // 3 4 5

Array.prototype.myFilter = function(cb){
    const output1 = [];

    for(var i = 0; i < this.length; i++){
        if(cb(this[i])){
            output1.push(this[i]);
        }
    }
    return output1;
}
// const res2 = arr.myFilter((ele) => ele > 2); 
// console.log(res2);




// reduce
const arr4 = [1,2,3,4,5];
// const result1 = arr4.reduce((acc, cur) =>{
//     return acc + cur;
// },0);
// console.log(result1);

Array.prototype.myReduce = function(cb, initialValue){
    let acc = initialValue;

    for(var i = 0; i < this.length; i++){
        acc = acc ? cb(acc, this[i]) : this[i];
    }
    return acc;
}
// to print
const result1 = arr4.myReduce((acc, cur) =>{
    return acc + cur;
},0);
console.log(result1);





// call

let person1 = {
    name : "Parin",
};

let person2 = {
    name : "Rahul",
};

function printAge(age){
    return `${this.name} has age of ${this.age}`;
}

// printAge.call(person1);
printAge.call(person1);