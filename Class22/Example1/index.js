// defining function inside the constructor
class Car{
    constructor(model, color){
        this.model = model;
        this.color = color;
        this.getDetails = function(){
            return `Car model is ${this.model} and color is ${this.color}`;
        }
    }
}

const BMWcar = new Car('BMW', 'Blue');

// BMWcar is object, made from Car class

//BMWcar // to get object data of BMWcar
//BMWcar.model // to get model name
//BMWcar.color  // to get color
//BMWcar.getDetails()  // to get, getDetails functions
// in above, we can see all objects, as they are written in constructor.
//-----------------------------------



// defining function outside constructor
// instead of defining function in constructo we are defining it outside of constructor

class Cars{
    constructor(model, color){
        this.model = model;
        this.color = color;
    }
    getDetails(){
        return `This is ${this.model} car has ${this.color} color.`;
    }
}

const skoda = new Cars('Skode Taigun', 'Blue');

//skoda // to get object data of skoda
//skoda.model // to get model name
//skoda.color  // to get color
//skoda.getDetails()  // to get, getDetails functions // in prototype
// in above, we cannot see, getDetails function in object, as they are written outside constructor. & it goes to prototype
// getDetails will remain in prototype of object, we can see in it.


//-----------------------------------------------

class Cars{
    constructor(model, color){
        this.model = model;
        this.color = color;
        this.getDetails = function(){
            return ` constructor : This is ${this.model} car has ${this.color} color.`;
        } 
    }
    getDetails(){
        return `Prototype : This is ${this.model} car has ${this.color} color.`;
    }
}

const honda = new Cars('honda civic', 'white');

// if we access skoda we'll see getDetails function in object from constructor, also in prototype which is outside constructor. 