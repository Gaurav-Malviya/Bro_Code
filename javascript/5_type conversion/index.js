document.getElementById("idButton").onclick= function(){
    var age= document.getElementById("idInput").value
    console.log("Let's increment the age")
    age +=1
    console.log("Before applying type conversion on variable age: ",age)
    age -=1
    age /=10
    age= Number(age)
    age +=1
    console.log("After applying type conversion on variable age:",age)
}