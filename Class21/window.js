console.log(this);
// 'this' points to window object


function test(){
    console.log(this);
}
test();
// points to window object


let obj = {
    name : "Atul",
    age : 60,
    getThis: function(){
        console.log(this);
    }
}

obj.getThis();
// results whole object



// assigning same function name to new variable
const getThisFn = obj.getThis;
getThisFn();
// results window object