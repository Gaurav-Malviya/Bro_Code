/*
anonymous function = Function without a name. It is often not 
                     accessible after its initial creation.
*/
 
/* 
benefits: #1 Doesn't clutter global namespace.
          #2 Usable once.
          #3 Can be passed as arguments.
*/

// IIFE = a JS function that runs as soon as it is defined
// grouping operator = ()

(function()
{
    document.getElementById("messageID").innerHTML="Hello Sir."
})()

setTimeout(function()
{
    document.getElementById("messageID").innerHTML="Fuck You"
    document.getElementById("messageID").style.fontSize="150px"
    document.getElementById("messageID").style.color="red"
},2000)