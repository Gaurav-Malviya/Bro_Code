
document.getElementById("idButton").onclick = function(){
    var age = document.getElementById("idInput").value
    if(age >= 65)
    {
        console.log("You are a senior.")
    }
    else if(age>=18)
    {
        console.log("You are an adult.")
    }
    else
    {
        console.log("You are a baby.")
    }
}
