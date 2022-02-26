/* foreach() perfomrs a function for each element in array */

let total= 0
let cart= [5,6,7,8,9]

function checkOut(element,index)
{
    total += element
    console.log(index)
}

cart.forEach(checkOut)
console.log("Your total is",total)
