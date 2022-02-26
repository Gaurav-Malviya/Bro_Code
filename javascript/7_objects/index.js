// object = a container for properties/methods
// property = values/variables that describe what an object has
// methods = functions that describe what an object can do


var human =
{
    name: 'Rick',
    age: 65,

    eat: function(){
        console.log("Rick is eating food")
    },

    drink: function(){
        console.log(human.name,"is drinking alcohol *burp*")
    },

    sleep: function(){
        console.log("Rick has passed out.")
    }
}

console.log(human.name) //dot notation
console.log(human['age']) //bracket notation
human.eat()
human.drink()
human.sleep()