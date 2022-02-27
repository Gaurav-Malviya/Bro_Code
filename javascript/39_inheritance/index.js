/* 
Inheritance = It is useful for code reusability. 
                 It reuses properties and methods of an existing class.
                 Children classes inherit from parent classes.
*/

class Animal
{
    constructor()
    {
        this.alive=true
    }
    eat()
    {
        console.log("This animal is eating")
    }
}

class Rabbit extends Animal
{
    jump()
    {
        console.log("Rabbit fucking jumps.")
    }
} 

class Fish extends Animal
{
    swim()
    {
        console.log("Look, the fish is swimming")
    }
}

let rabbit = new Rabbit()
let fish   = new Fish()

console.log(fish.eat())
console.log(rabbit.jump())
console.log(fish.swim())
