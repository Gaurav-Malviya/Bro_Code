let number1 =[3,14,1,2,5]
let number2 =[33,141,17,2,59]

number1.sort((x,y)=>x-y)
number2.sort(function(a,b)
{
    return b-a
})
console.log(number1)
console.log(number2)