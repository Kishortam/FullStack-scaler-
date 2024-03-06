// Objects

// {key : value}
//  "string" : any


var obj = {
    name : "Atul",
    lastName : "Jha",
    salary : 20000,
    address : {
        city : "mumbai",
        pincode : 400005
    },
    skills : ['HTML', 'Java', 'JS']
};

// access
console.log(obj);

console.log(obj.name);
console.log(obj['lastName']);
console.log(obj.address.city);
console.log(obj['address']['pincode']);
console.log(obj.skills[1]);

// update
obj.name = "prasad";
console.log(obj);

obj.address.city = "Raigad";
console.log(obj);

// delete
delete obj.salary;
console.log(obj);


// to get all keys 
console.log(Object.keys(obj));





