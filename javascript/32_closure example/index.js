//closure Example
(function()
{
    document.getElementById("messageID").innerHTML="Hello Sir"
})()


setTimeout(function()
    {
        document.getElementById("messageID").innerHTML="This time I will not say 'FUCK YOU' to you :)"

    },2000)


function makeChange(text)
{
    return function()
    {
        document.getElementById("messageID").innerHTML=text
    }
}

function makeSize(size)
{
    return function()
    {
        document.getElementById("messageID").style.fontSize= size +'px'
    }
}

function changeColor(color)
{
    return function()
    {
        document.getElementById("messageID").style.color= color
    }
}

setTimeout(makeChange('BUT'),4300)
setTimeout(makeSize(200),6300)
setTimeout(makeChange('BUTTT!!!'),7300)
setTimeout(makeSize(300),7300)
setTimeout(changeColor('red'),8000)
setTimeout(changeColor('green'),8300)
setTimeout(changeColor('yellow'),8600)
setTimeout(changeColor('magenta'),8900)
setTimeout(changeColor('white'),9200)
setTimeout(changeColor('green'),9500)
setTimeout(changeColor('yellow'),9800)
setTimeout(changeColor('magenta'),10100)
setTimeout(changeColor('white'),10400)
setTimeout(makeChange('Fuck You'),12000)
setTimeout(makeSize(20),12000)