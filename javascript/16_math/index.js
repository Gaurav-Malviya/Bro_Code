// Math = An object that provides basic 
//              mathematics functionality and constants.

//var myNum;

//myNum = Math.round(3.5);
//myNum = Math.floor(3.9);
//myNum = Math.ceil(3.1);
//myNum = Math.pow(3, 3);
//myNum = Math.sqrt(64);
//myNum = Math.abs(-1);
//myNum = Math.min(1, 5, 2, 4, 3);
//myNum = Math.max(1, 5, 2, 4, 3);
//myNum = Math.PI;
//myNum = Math.E;

//console.log(myNum);

// solve for hypotenuse of a right triangle

var num_l= window.prompt("Enter the length of the triangle")
var num_b= window.prompt("Enter side the breadth of the triangle")
var num_h= Math.pow(num_l, 2)+ Math.pow(num_b, 2)
num_h= Math.sqrt(num_h)
console.log("The hypotenious of the triangle is",num_h)

