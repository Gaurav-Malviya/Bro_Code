var symbol = window.prompt("Enter a symbol to use")
var rows = window.prompt("Enter the number of rows")
var columns = window.prompt("Enter the number of columns")
rows= parseInt(rows)
columns= parseInt(columns)
console.log(typeof(rows))
for(let i=0; i<rows; i++)
{
    for(let j=0; j<columns; j++)
    {
        document.getElementById("myFigure").innerHTML += symbol
    }
    document.getElementById("myFigure").innerHTML += '<br>'
}