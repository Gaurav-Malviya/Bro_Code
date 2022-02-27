// Object as argument

class Car
{
    constructor(model,color)
    {
        this.model= model
        this.color= color
    }
}

function changeColor(car, newColor)
{
    car.color= newColor
}

let car1= new Car("R8",'silver')
let car2= new Car("Type F","black")
console.log(car1.model,car1.color)
console.log(car2.model,car2.color)

console.log("")
console.log("Updating the color of",car1.model)
console.log("")
changeColor(car1,'red')
console.log(car1.model,car1.color)

