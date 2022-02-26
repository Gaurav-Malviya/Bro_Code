/* Math.random() generate psuedo-random number between 0 and 1.
   Do not use this method for security purpose. */

var randNum;
var counter = window.prompt("How many times would you like to roll the dice?")
var num_min= window.prompt("What is the minimum value of your dice?")
var num_max= window.prompt("What is the maximum value of your dice?")

function randomRoll(min,max)
{
    randNum= Math.random()*(max-min+1)+min
    randNum= Math.floor(randNum)
    console.log(randNum)
}
for(let i=0; i<counter; i++)
{
    randomRoll(num_min,num_max)
}
