const { errorMonitor } = require("events");

const post_URL = 'https://jsonplaceholder.typicode.com/posts/1';
const user_URL = 'https://jsonplaceholder.typicode.com/users/1';
const comment_URL = 'https://jsonplaceholder.typicode.com/comments/1';

function fetchData(){
    return fetch(url).then(data => data.json()).catch(err => err);
}

// example 2 : sequential execution
myFetch(post_URL)
    .then((data) =>{
        console.log(data);
        return myFetch(user_URL);
    })
.then((data) =>{
    console.log(data);
    return myFetch(comment_URL);
})
.then((data) =>{
    console.log(data);
})
.catch(err =>{
    console.log(err);
})



//
async function getPostRelatedData(){
   try{
    const postData = await fetchData(post_URL);
    console.log(postData);
    const userData = await fetchData(user_URL);
    console.log(userData);
    const commentData = await fetchData(comment_URL);
    console.log(commentData);
   }
   catch(err){
    console.log(err);
   }
}

getPostRelatedData();
// A promise(pending) B postData C






// try & catch  : get knowledge
function getResult(){
    try{
        console.log('A');
        console.log('B');
        console.log('C');
        throw new Error("failed at line number 59"); // custom error
        console.log('D');
        console.log('E');
    }
    catch(err){
        console.log(err);
    }
}

getResult();
// A B C error   // as at 4th error has occured next methods will not execute




// finally : finally always execute
function getResult(){
    try{
        console.log('A');
        console.log('B');
        console.log('C');
        console.log('D');
        console.log('E');
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("finally executes");
    }
}

getResult();