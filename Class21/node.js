console.log(this); 
// global

function test(){
    console.log('2', this);
}
test();
// global

let obj = {
    name : 'ravi',
    age : 23,
    getThis : function(){
        console.log(this);
    }
}
obj.getThis();
// object 



const getThisFn = obj.getThis;
getThisFn();
// global