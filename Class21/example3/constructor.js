// construct an object


// object literal
const marriage = {
    name : 'salman',
    age : 56,
    company : "microsoft",
    address : {
        city : 'mumbai',
        pincode : 400005,
    },
    getDetails: function(){
        return `I'm ${this.name} with age ${this.age}, currently working at ${this.company}`;
    }
}



// constructor way
function Person(name,age, company, address){
    this.name = name;
    this.age = age;
    this.company = company;
    this.address = address;
    this.getDetails= function(){
        return `I'm ${this.name} with age ${this.age}, currently working at ${this.company}`;
    };
}

// same structure for object
const AmirsMarriage = new Person('Ammir', 26, 'Microsoft', {city:'mumbai'}); 
// result => AmirsMarriage's object data
const ViveksMarriage = new Person('Vivek', 29, 'Adobe', {city:'Gurgaon'}); 
// result => ViveksMarriage's object data






// class  // using class we are making a constructor 
class marriageDetail{
    constructor(name, age, company, address){
        this.name = name;
        this.age = age;
        this.company = company;
        this.address = address;
        this.getDetails= function(){
            return `I'm ${this.name} with age ${this.age}, currently working at ${this.company}`;
        };
    }
}

const santoshMarriage = new marriageDetail('santosh', 26, 'Microsoft', {city:'mumbai'});
// result => MarriageDetail of santoshMarriage's object






// practice part
// object literal
const GF = {
    name : "Roshani",
    age : 27,
    contact : 98689455,
    job :{
        profile : 'Data analyst',
        location : "thane",
        salary : 26000,
    },
    getDetails : function(){
        return `my name is ${this.name} & age is ${this.age}, working at ${this.job.location}.` 
    }
}


// constructor way
function Person(name, age, location, salary){
    this.name = name;
    this.age = age;
    this.location = location;
    this.salary = salary;
    this.getDetails = function(){
        return  `my name is ${this.name} & salary is ${this.salary}, working at ${this.location}.`;
    }
}

const newGF = new Person('roshani', 27, 'thane', 260000);
