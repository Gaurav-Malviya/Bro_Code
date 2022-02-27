/* 
class = A class is a  "blueprint" for creating objects.
              Define properties and/or methods.
*/



class car
{
    drive()
    {
        console.log("You are driving the car!")
    }
    brake()
    {
        console.log("You applied brakes.")
    }
}

//create player1 and player2 object
player1 = new car() 
player2 = new car()

player1.drive()
player2.brake()