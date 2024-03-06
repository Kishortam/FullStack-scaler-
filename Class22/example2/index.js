// extend method or taking data from another class
// extend a class to access both values

class Car{
    constructor(model, color){
        this.model = model;
        this.color = color;
        this.getDetails = function(){
            return `This is a ${this.model} and has color ${this.color}.`;
        }
    }
}

// class SuperCar{
//     constructor(seater, price){
//         this.seater = seater;
//         this.price = price;
//     }
// }

// extending a SuperCar class using class Car
class SuperCar extends Car{
    constructor(seater, price, model, color){  // taking attributes from Car Class
        super(model, color);     // this is executing car class in superCar
        this.seater = seater;
        this.price = price;
    }
}

const ferrari = new SuperCar(2, 20000000, 'racer', 'red' );

// when we access it using 'ferrari', it shows all objects of it.

// we can extend it furthermore.