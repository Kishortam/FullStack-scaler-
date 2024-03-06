// example 1
// function inside constructor

class car{
    constructor(model, color){
        this.model = model;
        this.color = color;
        this.getDetails = function(){
            return `car model is ${this.model} and color is ${this.color}.`
        }
    }
}

const tata = new car('nexon', 'blue');


// one more

class mobile{
    constructor(price, storage){
        this.price = price;
        this.storage = storage;
        this.getDetails = function(){
            return `this phone consist a storage of ${this.storage} & price costs ${this.price}.`
        }
    }
}

const redmi = new mobile(13500, "128 GB");


// defining function outside a constructor
class laptop{
    constructor(company, price){
        this.company = company;
        this.price = price;
    }
    getDetails(){
        return `company of the laptop is ${this.company} & price is ${this.price}.`
    }
}

const laptop1 = new laptop("HP", 49000);



class laptop{
    constructor(company, price){
        this.company = company;
        this.price = price;
        this.getDetails = function(){
            return `constructor : company of the laptop is ${this.company} & price is ${this.price}.`
        }
    }
    getDetails(){
        return `proto : company of the laptop is ${this.company} & price is ${this.price}.`
    }
}

const laptop2 = new laptop("lenevo", 50000);









// example 2 : extend

class mobile{
    constructor(price, storage){
        this.price = price;
        this.storage = storage;
        this.getDetails = function(){
            return `this phone consist a storage of ${this.storage} & price costs ${this.price}.`
        }
    }
}

const Iphone = new mobile(55000, "128 GB");

class mobilePhone extends mobile{
    constructor(operatingSystem, battery, camera, price, storage){
        super(price, storage);
        this.operatingSystem = operatingSystem;
        this.battery = battery;
        this.camera = camera;
    }
}

const samsung = new mobilePhone("android", "4500Mah", "48MP", 19999, "62GB");





// playing with function i  constructor and outside of constructor

class fruit{
    constructor(color, name){
        this.color = color;
        this.name = name;
        this.getDetails = function(){
            return `${this.name} is ${this.color} in color.`;
        }
    }
    
    getName(){
        return `fruit name is ${this.name}.`;
    }
}

const fruit1 = new fruit("yellow","lemon");

// extending it

class SweetFruit extends fruit{
    constructor(taste, color, name){
        super(color, name);
        this.taste = taste;
    }
}

const fruit2 = new SweetFruit("sweet", "yellow-orange", "mango");











// example3
class mobile{
    constructor(price, storage){
        this.price = price;
        this.storage = storage;
        this.getDetails = function(){
            return `this phone consist a storage of ${this.storage} & price costs ${this.price}.`
        }
    }
    static GST = "18%";
    static state = "maharasthra";
}

const oppo = new mobile(13500, "128 GB");


mobile.GST // 18%
mobile.state // maharashtra






// example4 : explicitely put function in prototype

function chocolate(brand, price){
    this.brand = brand;
    this.price = price;
    this.getDetails = function(){
        return `this is ${this.brand} company chocolate.`
    }
}

const choco1 = new chocolate('cadbury', 200);

// put in prototype.
chocolate.prototype.getPrice = function(){
    return `it cost of rs. ${this.price}`;
}


// to see
choco1.getDetails();
choco1.getPrice(); // prototype

