// Rest operator
// Q.1 show first name as string and other data as object
const obj = {
    name : "Kishor Tambe",
    age : 27,
    city : "Mumbai",
    contactNo : 9892623219,
    qualification : "Bsc",
}

// to see object
console.log(obj);

// to see particular data
console.log(obj.city);


// to create a rest object
const {city,...rest} = obj; // excluding city, rest of all data will come under rest object

// to see rest object / we can give any name to rest
console.log(rest); // name, age, contactNo, qualification




// making another object
const{qualification, location,...myObj} = obj;
console.log(qualification); // Bsc
console.log(myObj); // name, age, contactNo




// Q.2

const arr = [1,2,3,4,5];

console.log(arr[0]); // 1

const [a, b, ...restArr] = [1,2,3,4,5];
console.log(a, b, restArr); // a = 1 b = 2 [3, 4, 5]



// Q.3 clone / spread operator

const arr2 = [1,2,3,4];
const arr3 = [...arr2]; // 1 2 3 4




// Q.4
function sum(a,b,c){
    return a + b + c;
}
console.log(sum(1,2,3)); // 6
console.log(sum(1)); // NaN
console.log(sum(1,2)); // NaN

// when there is undefined values, and we want to make 0 as default value
function sum(a,b = 0,c = 0){
    return a + b + c;
}
console.log(sum(1,2,3)); // 6
console.log(sum(1)); // 1
console.log(sum(1,2)); // 3