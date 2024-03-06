// async programming -1 
function ContAnimation(id){
    let count = 0;

    setInterval(() => {
        const newColor = count % 2 === 0 ? "red" : "blue";
        changeColor(id, newColor);
        count++;
    }, 5000);
}

function changeColor(id, color){
    document.getElementById(id).style.backgroundColor = color;
}





//
function countdownwithClear(n){
    let count = 0;

    let ref = setInterval(() => {
        console.log(n-count);

        if(count === 20){
            clearInterval(ref);
        }
        count++;
    }, 1000);
}

countdownwithClear(50);










