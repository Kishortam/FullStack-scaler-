
let student = {
    firstName : "Adam",
    lastName : "Smith",
    age : 25,
    getEmail: function(){
        console.log(`${this.firstName}. ${this.lastName}@gmail.com`);
    }
};


let teacher = {
    firstName : "Steve",
    lastName : "Roger",
    age : 25,
    getEmail: function(){
        console.log(`${this.firstName}. ${this.lastName}@gmail.com`);
    }
};

let Manager = {
    firstName : "Rohit",
    lastName : "Kakde",
    age : 25,
};



const getRasikaMail = student.getEmail;
getRasikaMail();  // undefined.undefined@gmail.com

student.getEmail(); // adam.smith@gmail.com

teacher.getEmail(); // steve.roger@gmail.com

// if we want to print teachers mail as student
student.getEmail.call(teacher);  // steve.roger@gmail.com

// as there is no getEmail method for managr, we can use from different object and explicitely call it
student.getEmail.call(Manager); // rohit.kakde@gmail.com

const getKishorMail = student.getEmail.bind(teacher);
getKishorMail(); // steve.roger@gmail.com

// we cannot bind it again, it will show same result as previos
getPrakshMail = getKishorMail.bind(student);
getPrakshMail(); // steve.roger@gmail.com