/*
    A function is a block of code designed to perform, a particular task/procedure. 
    We invoke "call" the function whenever we want it to do something. 
    However, we need to define what the task the function should do
*/
 
// arguments = values that are sent
// parameters = values that are received

function sayHello(myName, age)
{
    console.log("Hello",myName)    
    console.log("You are",age,"years old.")
}

function toCelsius(value)
{
    var result= (32*value - 32)*(5/9)
    return result
}

sayHello("Raj",23)

var myTemp = toCelsius(100)
console.log('My temperature in Celsius is',myTemp,'degrees.')