// Q. create a function that logs a message after a specific delay

function delaydLog(msg, delay){
    setTimeout(() => {
        console.log(msg);
    }, delay);
}
delaydLog('I', 1000);
delaydLog('LUV', 2000);
delaydLog('U', 3000);




// Q. promise sleep

function sleep(time){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, time * 1000);
    });
}

async function main(){
    console.log('1');
    await sleep(5);
    console.log('2');
}

main();