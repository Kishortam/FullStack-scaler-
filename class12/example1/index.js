
// event 1 : one of the method to add eventListner 
function handleSubmit(){
    console.log('hi');
}

// event 2 :
const buttRef1 = document.querySelector('button');
buttRef1.addEventListener('click', function(event){
    console.log('This is single time clicked');
})

// event 3 :
/*
const buttRef1 = document.querySelector('button');
buttRef1.addEventListener('dblclick', function(e){
    console.log('This is double time clicked');
})
*/

// we can add/use  n numbers of event listners to particular element

// get value of inputs on click
const userRef = document.getElementById('user');
const passwordRef = document.getElementById('password');
const butRef = document.querySelector('button');

butRef.addEventListener('click', function(eve){
    eve.preventDefault();  // to prevent default behaviour, it stops reloading of page & hence the info or data persists
    console.log(userRef.value);
    console.log(passwordRef.value);
    // console.log(userRef.value, passwordRef.value);
})



/*
// another method to get values of input on button click
const butRef = document.querySelector('button');

butRef.addEventListener('click', function(eve){
    const userRef = document.getElementById('user');
    const passwordRef = document.getElementById('password');
    console.log(userRef.value, passwordRef.value);
})
*/