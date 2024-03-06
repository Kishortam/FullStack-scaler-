// const a = {
//     firstName : "Atul",
//     lastName : "Jha",
//     address : {
//         city : "patna",
//         State : "Bihar"
//     }
// }

// const b = a;
// a.lastName = "patil";
// console.log(a,b);
//both of objects lastname will change to patil


//-----
//shallow copy
const u = {
    firstName : "Atul",
    lastName : "Jha",
    address : {
        city : "patna",
        State : "Bihar"
    }
}

// const v = {...u};  // copy

// u.lastName = "rane";

// u.address.city = "new york";
// console.log(u,v);
// both will have same address


//---------------------
// deep copy
const b = {...u};
b.address = {...u.address};

u.lastName = "Pandit";

u.address.city = "manchester";
console.log(u,b);  // manchester patna




// deep copy-2

const h = {
    firstName : "salman",
    lastName : "khan",
    address : {
        city : "mumbai",
        State : "maha"
    }
}

const i = JSON.parse(JSON.stringify(h));
h.lastName = "sayyad";
h.address.city = "Morba";
console.log(h,i);

// only changes in h will happen as we are not making any changes in i