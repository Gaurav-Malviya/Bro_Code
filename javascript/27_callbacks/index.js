/* callback = function passed as an argument to another function.
              allows a function to invoke another function */


var askUser= window.prompt("What would you like to know")

function displayConsole(output)
{
    console.log(output)
}

function displayDOM(output)
{
    document.getElementById("messageID").innerHTML= output
}
function glitchmessage(text,callback)
{
    text = text+' FUCKKKKKK!'
    callback(text)
}

glitchmessage(askUser,displayConsole)
glitchmessage(askUser,displayDOM)


