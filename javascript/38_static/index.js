/*
static= It is a method or a property which belongs to a class and which does 
not belong to any one object created from the class
*/

class Car
{
    static numberOfCars= 0
    constructor(model)
    {
        this.model= model
        Car.numberOfCars +=1
    }
}

let car1 = new Car('R8')
let car2 = new Car('DB12')
let car3 = new Car('F8')

console.log("Total number of cars:",Car.numberOfCars)
console.log("Car--> "+car1.model)
console.log("Car--> "+car2.model)
console.log("Car--> "+car3.model)
