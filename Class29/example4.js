// polyfills

//reduce
if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(cb, initialValue){
        let accumulator = initialValue;

        for(let i = 0; i < this.length; i++){
            accumulator = cb.call (accumulator, this[i], i, this);
        }
        return accumulator;
    }
}

// how originally reduce works
[1,2,3].reduce((acc, item) =>{
    acc += item;
    return acc;
},0);