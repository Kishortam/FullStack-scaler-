// function constructor 


// when we want to put a method outside of constructor
// and it should show in prototype, we use below method

function Car2(model, color){
    this.model = model;
    this.color = color;
    this.getColor = function(){
            return this.color;
    }
}

// to put function in prototype
// we can use below method to put in prototype
 Car2.prototype.getModel = function(){
    return `this car is a ${this.model}`;
 }

 const kia = new Car2('Seltos', 'Red');