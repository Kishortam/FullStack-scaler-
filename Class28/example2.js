
// Q.1 Implement a counter function that returns +1 value

var a = 0;
function counter(){
    a = a+1;
    return a;
}
counter(); // 1
counter(); // 2



// Q.2 
function createCounter(){
    var a = 0;
    return function(){
        a = a + 1;
        return a;
    }
}

const atulCounter = createCounter();
atulCounter(); // 1
atulCounter(); // 2

const vatanCounter = createCounter();
vatanCounter(); // 1
vatanCounter(); // 2
vatanCounter(); // 3

const vinethaCounter = createCounter();
vinethaCounter(); // 1



//----------------------

function myPromiseall(taskList){
    const result = [];

    let completed = 0;

    return new Promise((resolve, reject)=>{
        taskList.forEach((promise, index)=>{
            promise.then((val)=>{
                result[index] = val;
                completed += 1;

                if(completed === taskList.length){
                    resolve(result);
                }
            })
            .catch(error =>
                reject(error)
            )
        })
    })
}