// example 2

const { promiseHooks } = require("v8");

new Promise((resolve, reject) =>{
    var passingScore = 7;
    var studentScore = 5;

    if(studentScore > passingScore){
        resolve('congartulations');
    }
    else{
        reject('bad luck');
    }
}).then(function(data){
    console.log('success', data);
}).catch(function(err){
    console.log('fail', err);
})



new Promise((resolve, reject)=>{
    var tvPrice = 20000;
    var budget = 23000;

    if(tvPrice < budget){
        resolve('we will buy');
    }
    else{
        reject('dont buy');
    }
}).then(function(data){
    console.log('in budget', data);
}).catch(function(err){
    console.log('out of budget', err);
})



// promise with setTimeout, after specific time result will print

new Promise((resolve, reject)=>{
    var bikePrice = 30000;
    var bonusMoney = 25000;

    setTimeout(() => {
        if(bonusMoney > bikePrice){
            resolve('buy bike');
        }
        else{
            reject('dont buy')
        }
    }, 3000);
}).then(function(data){
    console.log('bonus is higher > ', data);
}).catch(function(err){
    console.log('bonus is lower > ', err);
})








// example 3
todos = [{"id":1,"todo":"Do something nice for someone I care about","completed":true,"userId":26},
{"id":2,"todo":"Memorize the fifty states and their capitals","completed":false,"userId":48},
{"id":3,"todo":"Watch a classic movie","completed":false,"userId":4},
{"id":4,"todo":"Contribute code or a monetary donation to an open-source software project","completed":false,"userId":48},
{"id":5,"todo":"Solve a Rubik's cube","completed":false,"userId":31},
{"id":6,"todo":"Bake pastries for me and neighbor","completed":false,"userId":39},
{"id":7,"todo":"Go see a Broadway production","completed":false,"userId":32},
{"id":8,"todo":"Write a thank you letter to an influential person in my life","completed":true,"userId":13},
{"id":9,"todo":"Invite some friends over for a game night","completed":false,"userId":47},
{"id":10,"todo":"Have a football scrimmage with some friends","completed":false,"userId":19},
{"id":11,"todo":"Text a friend I haven't talked to in a long time","completed":false,"userId":39},
{"id":12,"todo":"Organize pantry","completed":true,"userId":39},
{"id":13,"todo":"Buy a new house decoration","completed":false,"userId":16},
{"id":14,"todo":"Plan a vacation I've always wanted to take","completed":false,"userId":28},
{"id":15,"todo":"Clean out car","completed":false,"userId":33},
{"id":16,"todo":"Draw and color a Mandala","completed":true,"userId":24},
{"id":17,"todo":"Create a cookbook with favorite recipes","completed":false,"userId":1},
{"id":18,"todo":"Bake a pie with some friends","completed":false,"userId":1},
{"id":19,"todo":"Create a compost pile","completed":true,"userId":5},
{"id":20,"todo":"Take a hike at a local park","completed":true,"userId":43},
{"id":21,"todo":"Take a class at local community center that interests you","completed":false,"userId":22},
{"id":22,"todo":"Research a topic interested in","completed":false,"userId":4},{"id":23,"todo":"Plan a trip to another country","completed":true,"userId":37},
{"id":24,"todo":"Improve touch typing","completed":false,"userId":45},
{"id":25,"todo":"Learn Express.js","completed":false,"userId":49},
{"id":26,"todo":"Learn calligraphy","completed":false,"userId":50},
{"id":27,"todo":"Have a photo session with some friends","completed":false,"userId":14},
{"id":28,"todo":"Go to the gym","completed":false,"userId":15},
{"id":29,"todo":"Make own LEGO creation","completed":false,"userId":30},
{"id":30,"todo":"Take cat on a walk","completed":false,"userId":15}],
total=150,
skip=0,
limit =30;


const myFetch = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data.todos);
        }, 10000);
    })
}

myFetch().then(data => console.log(data)).catch(err => console.log(err));


// Q.2  return todo data or error with given id after 10 sec.

const myFetchWithId = function(id){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const todoDataWithId = data.todos.find(todo => todo.id === id);
            if(todoDataWithId){
                resolve(todoDataWithId);
            }
            else{
                reject('error');
            }
        }, 5000);
    })
}

myFetchWithId(10).then(data => console.log(data)).catch(err => console.log(err));