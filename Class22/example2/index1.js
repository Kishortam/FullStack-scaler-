class Car{
    constructor(model, color){
        this.model = model;
        this.color = color;
        this.getDetails = function(){
            return `This is a ${this.model} and has color ${this.color}.`;
        }
    }
    getModel(){
        return `this is a ${this.model}.`; // this will remain in prototype
    }
}

// extending a SuperCar class using class Car
class SuperCar extends Car{
    constructor(seater, price, model, color){  // taking attributes from Car Class
        super(model, color);     // this is executing car class in superCar
        this.seater = seater;
        this.price = price;
    }
}

const ferrari = new SuperCar(2, 20000000, 'racer', 'red' );
const ford = new SuperCar(4, 2.50000000, 'SUV', 'Grey' );
// when we access it using 'ferrari', it shows all objects of it.

// getDetail() is a function from parent
// while, getModel is kept in  prototype of Car class