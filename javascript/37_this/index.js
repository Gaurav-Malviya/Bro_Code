/*
this = 'this' is a  reference to the object that we're currently
        working with
*/

//https://www.youtube.com/watch?v=5L0LPndzROU&list=PLZPZq0r_RZOPIiD5iO00XMhA3W-xFpUt4&index=40



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
        console.log("You are driving",this.make,"!")
    }
    brake()
    {
        console.log("You applied brakes.",this.model,"stopped.")
    }
    whatIsThis()
    {
        return this 
    }
}

let car1 = new car('audi','r8','2010','blue')
let car2 = new car('aston martin','db8','2015','silver')

console.log(car1.whatIsThis())
car1.brake()
car2.drive()