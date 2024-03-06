

let student = {
    name : "roshni",
    lastName : "Chhede",
    age : 27,
    getEmail : function(){
        console.log(`${this.name}.${this.lastName}@gmail.com`);
    }
};

let teacher = {
    name : "geeta",
    lastName : "rajput",
    age : 29,
    getEmail : function(){
        console.log(`${this.name}.${this.lastName}@gmail.com`);   
    }
};

let manager = {
    name : "Vishal",
    lastName : "shinde",
}

student.getEmail();  // roshni.chhede@gmail.com

// using function from student object we can get managers email id
student.getEmail.call(manager); // vishal.shinde@gmail.com





// example : 3

const a = {
    firstName : "Atul",
    lastName : "Jha",
    address : {
        city : "patna",
        State : "Bihar"
    }
}

const b = a;
b.lastName = "patil";
console.log(a,b);

const v = {...u};

u.lastName = "rane";

u.address.city = "new york";