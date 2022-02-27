class Vehicle
{
    drive()
    {
        console.log("You are driving a vehicle")
    }
}

class Car extends Vehicle
{
    drive()
    {
        console.log("You re driving a car")
    }
}

class SportsCar extends Car
{
    drive()
    {
        console.log("You are driving a sports car")
    }
}

class Tricyle extends Vehicle
{

}

let car       = new Car
let sportsCar = new SportsCar
let tricycle  = new Tricyle

car.drive()
sportsCar.drive()
tricycle.drive()