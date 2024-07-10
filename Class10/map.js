const names = ['atul', 'kavya', 'sandhiya']; //Output: ['ATUL', 'KAVYA', 'SANDHIYA']

function convertToUpperCase(listOfNames) {

    // 1. Create a new array
    // 2. Loop through arr
    // 3. Push data to array
    // 4. return the new array

    //Using Imperative
    const result = [];
    for(let i = 0; i < listOfNames.length; i++) {
        result.push(listOfNames[i].toUpperCase());
    }
    return result;


    // Declarative way using forEach
    const result1 = [];
    listOfNames.forEach(function(name, idx) {
        result1.push(name.toUpperCase());
    })
    return result1;

    // Declarative way using map
    const result3 = listOfNames.map(function(name, idx) {
        return name.toUpperCase();
    })
    return result3;

}

// console.log(convertToUpperCase(names));



// exmaple 2 // using map

const fruit = ['mango', 'apple', 'strawberry'];

function upper(froot){
    const result4 = froot.map(function(name, idx){
        return name.toUpperCase();
    })
    return result4;
}

console.log(upper(fruit));




// using forEach

function upper2(froot){
    const arr = [];
    froot.forEach(function(name, idx){
        arr.push(name.toUpperCase());
    })
    return arr;
}
console.log(upper2(fruit));
