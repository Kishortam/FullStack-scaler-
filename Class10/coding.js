const names = ['atul', 'kavya', 'sandhiya'];

// ['ATUL', 'KAVYA', 'SANDHIYA']

function convertToUpperCase(listOfNames) {
    // code goes here
    const result = [];
    for(let i = 0; i < listOfNames.length; i++) {
        result.push(listOfNames[i].toUpperCase());
    }
    return result;
}

console.log(convertToUpperCase(names));
console.log(names);



// example 2

const fruits = ['mango', 'apple', 'litchi', 'banana'];

function upperStyle(arr1){
    const result = [];

    for(var i = 0; i < arr1.length; i++){
        result.push(arr1[i].toUpperCase());
    }
    return result;
}

console.log(upperStyle(fruits)); // ['MANGO', 'APPLE', 'LITCHI', 'BANANA']



// example 3
const city = ['MUMBAI', 'NOIDA', "HYDERABAD", 'CHENNAI'];

function toSmall(arr2){
    const newResult = [];
    for(var i = 0; i < arr2.length; i++){
        newResult.push(arr2[i].toLowerCase());
    }
    return newResult;
}

console.log(toSmall(city));  // ['mumbai', 'noida', 'hyderabad', 'chennai']