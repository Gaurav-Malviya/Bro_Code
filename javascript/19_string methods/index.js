var myName= "Bro Code"
var myPhone = "123-456-7890"

console.log(myName)
console.log(myName.length)
console.log("charAt(0)-->",myName.charAt(0))
console.log("index of blank splace is",myName.indexOf(" "))
console.log("index of last 'o' is",myName.lastIndexOf("o"))
console.log(myName.trim());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());


var firstName= myName.slice(0, myName.indexOf(" "));
console.log(firstName);
var lastName= myName.slice(myName.lastIndexOf(" ")+1,myName.length)
console.log(lastName)

myPhone = myPhone.replaceAll("-","")
console.log(myPhone)