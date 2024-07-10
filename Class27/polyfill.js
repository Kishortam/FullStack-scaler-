// polyfill : A polyfill is a piece of code (usually JavaScript on the Web) 
//used to provide modern functionality on older browsers that do not natively support it.

// if any method in old browser is not present, we can make it by using its logic


// polyfill for forEach

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callback){
        // implement a logic of forEach // it takes a callback function
        const length = this.length;
        // iterate through all items
        for(var i = 0; i < length; i++){
            // execute a callback
            callback(this[i], i, this);
        }
    }
}

// to print => [1,2,3,4,5].myForEach(item => console.log(item));





// polyfill for Map
if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback){
        // implement a logic of a map

        // create an empty array
        const output = [];

        // iterate
        for(var i = 0; i < this.length; i++){
            // execute a callback
            const newItem = callback(this[i], i, this);

            // push result into output array
            output.push(newItem);
        }
        // return output array
        return output;
    }
}
 





// polyfill for filter
if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(callback){
        // implement logic for filter

        // create an empty  output array
        const output = [];

        // iterate
        for(var i = 0; i < this.length; i++){
            // check if condition is met or not
            const isTrue = callback(this[i], i, this);

            if(isTrue){
                output.push(this[i]);
            }
        }
        return output;
    }
}





// polyfill for reduce
Array.prototype.myReduce= function(callbackFn, initialValue) {
    var accumulator = initialValue;
  for (var i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callbackFn.call(undefined, accumulator, this[i],   i, this);
      } else {
        accumulator = this[i];
      }
    }
    return accumulator;
  }