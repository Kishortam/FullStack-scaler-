// Q.1
// create an animation function ContAnimation that continously change the background color
// of an element between red and blue. the function should take the elements ID as an argument
// and update the background color every 500 ms.

function ContAnimation(id){
    let count = 0;

    setInterval(() => {
        const newColor = count % 2 === 0 ? 'red' : 'blue';
        changeColor(id, newColor);
        count++;
    }, 500);
}

function changeColor(id, color){
    document.getElementById(id).style.backgroundColor = color;
}




// Q.2 
var obj = {
    name : 'Nirmal',
    logDetails : function(){
        setTimeout(() => {
            console.log(this);
        });
    }
}
obj.logDetails();
// window   // when you have setTimeout or setInterval in object or any callback function it always results window
// async method in object


// Q.3
for(var i = 0; i < 5; i++){
    setTimeout(() => {
        console.log(i);
    });
}
// 5 5 5 5 5   // var is a function scope



// Q.4
for(let i = 0; i < 5; i++){
    setTimeout(() => {
        console.log(i);
    });
}
// 0 1 2 3 4  // let is a block scope




// Q.5
// write a function countdownwithClear that takes a positive integer n as an argument.
// the function should log the numbers from n down to 1, with a delay of 1000 ms.
// betn each log. however, the function should stop logging after 5 sec.


// function countdownwithClear(n) {
//     for(var i = n; i > n-20; i--){
//         setTimeout(() => {
//             console.log(i);
//         }, 1000*(n-i + 1));
//     }
// }
// countdownwithClear(50)


function countdownwithClear(n){
    let count = 0;
    const ref = setInterval(() => {
        console.log(n-count);

        if(count === 20){
            clearInterval(ref);
        }
        count++;
    }, 1000);
}
countdownwithClear(50)