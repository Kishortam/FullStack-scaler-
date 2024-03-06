// Q.1 write a function sum (x)(y)(z)
// return sum of x, y, z

function sum(x){
    return function(y){
        return function(z){
            return x + y + z;
        }
    }
}
console.log(sum(1)(2)(3)); // 6



// Q.2 write a function sum (x)(y)(z)
// return sum of x, y, z

function sum(x,y){
    return function(z){
        return function(){
            return x + y + z;
        }
    }
}
console.log(sum(1,2)(3)()); // 6





// Q.3 implement a function that generates a random number between 1 & 100
// and returns a function that checks if a guessed number matches the generated number

function guessGame(){
    const targetNumber = Math.floor(Math.random()*100) + 1;
    //console.log(targetNumber);

    return function(num){
        if(targetNumber > num){
            return "try higher number";
        }
        else if(targetNumber < num){
            return "try lower number";
        }
        else{
            return "congratulations";
        }
    }
}

const guessNumber = guessGame();
guessNumber(40);
guessNumber(78);



// Q.4 create a function that generates a sequence of fibonacci numbers using a closure

function fibonacciSequence(){
    let a = 0;
    let b = 1;

    return function(){
        const result = a;
        a = b;
        b = result + b;
        return result;
    }
 
}

const generateFibonacci = fibonacciSequence();
generateFibonacci(); //0
generateFibonacci(); // 1
generateFibonacci(); // 1
generateFibonacci(); // 2
generateFibonacci(); // 3
generateFibonacci(); // 5
generateFibonacci(); // 8



//--- other method
function fibonacciSequence(){
    let a = 0;
    let b = 1;

    return function(){
        const result = a;
        [a,b] = [b, a + b];
        return result;
    }
}
const generateFibonacci1 = fibonacciSequence();
generateFibonacci1(); //0


