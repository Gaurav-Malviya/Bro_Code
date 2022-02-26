/*
Closure = It is a function with preserved data, which gives you 
          access to an outer function’s scope from an inner function.

Benefits: #1 State of variables in outer scope are "saved".
          #2 Variables in outer scope are considered "private",ie, these 
             variables can not be accesed from outside of outer scope.
*/

let score = function()
{
    points=0
    return function()
    {
        points +=1
        return points
    }
}()

console.log(score())
console.log(score())
console.log(score())
