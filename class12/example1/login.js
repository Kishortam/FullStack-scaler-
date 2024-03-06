
// Inline eventListner
function handleSubmit(){
    console.log("button has clicked");
}

// Event Listner using reference
// get userName & password values on click
const butRef = document.querySelector('button');

butRef.addEventListener('click', function(event){   // we can set dblclick also
    event.preventDefault();  // to prevent data to go away from console
    const userRef = document.getElementById('user');
    const passRef = document.getElementById('pass');

    console.log(userRef.value, passRef.value);
})

