
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

function superCar(price, feature, model, color){
    Car2.call(this, model, color); // super()
    this.price = price;
    this.feature = feature;
}
superCar.prototype = Object.create(Car2.prototype); // extends
superCar.prototype.getOnRoadPrice = function(){
    return this.price = 10000;
}
const BMWcar = new superCar(['f1','f2'], 100000, "BMW", "red");