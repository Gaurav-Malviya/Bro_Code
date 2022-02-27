/* 
constructor = It is a special method for assigning properties.
                 It is automatically called when creating an object.
*/
class car
{
    constructor(make, model, year, color)
    {
        this.model= model
        this.make = make
        this.year = year
        this.color = color
    }
    drive()
    {
        console.log("You are driving the car!")
    }
    brake()
    {
        console.log("You applied brakes.")
    }
}

let car1 = new car('audi','r8','2010','blue')
let car2 = new car('aston martin','db8','2015','silver')

console.log("CAR 1")
console.log(car1.model)
console.log(car1.make)
console.log(car1.year)
console.log(car1.color)

console.log("*******************")

console.log("CAR 2")
console.log(car2.model)
console.log(car2.make)
console.log(car2.year)
console.log(car2.color)

