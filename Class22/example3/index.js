// static
class car{
    constructor(model, color){
        this.model = model;
        this.color = color;
        this.getDetails = function(){
            return `This is a ${this.model} and has color ${this.color}.`;
        }
    }
    static tax = '10%';
}

const toyota = new car('corolla', 'silver');

//toyota.color  // silver
// toyota.model  // corolla


// we can access static function without using object.
// we dont need to create object to access static method
//car.tax  // 10%

// we can update static method
car.tax = '20%';