/*
function expression = A function can also be defined using an expression.
                      Function expression can be stored in a variable. The 
                      variable can be used as a function.
                      They can be invoked by adding ()
                      1. Useful as closures
                      2. Used in IIFE (funcs that runs as soon as it's defined)
                      3. Can be passed as arguments to other functions 
*/

// ******************
// function declaration
// ******************

function sayHello()
{
    console.log("Wuff")
}
console.log("USING function declaration:".toUpperCase())
sayHello()


// ******************
// function expression
// ******************

let dog= function(){console.log("Wuff")}
console.log("USING function expression:".toUpperCase())
dog()

// ********************************
// function expression passed as an
// argument to another function
// ********************************

let attack= function()
            {
            console.log("Katana damage: 35")
            document.getElementById("messageID").innerHTML= "Katana damage: 35"
            }
function output(fun)
{
    fun()
}
output(attack)


