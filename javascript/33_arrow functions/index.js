
let hello
let x ="yo"
let y ="Bro"
let l=60
let m=9 


//function expression
hello = function(x)
{
    return x+" "+y+" "+"Hello";
}
console.log(hello(x));

//arrow function
helloz = (x) => x+" "+y+" "+"Hello";
console.log(helloz(x));

kanye = function(l,m)
{
    var z =l+m;
    return console.log(z);
}

kanyezz = (l,m) => {var ez=l+m; console.log(ez,ez)}

kanye(l,m)
kanyezz(l,m)

// *********************
// MAP
// *********************
console.log(" ");
console.log("*********************");
console.log("MAP");
console.log("*********************");

let storeUSD=[5,6,7,8,9];
let storeEur;

storeEur= storeUSD.map(value => value*=0.84)
console.log(storeEur)

// *********************
// FILTER
// *********************
console.log(" ");
console.log("*********************");
console.log("FILTER");
console.log("*********************");


// *********************
// REDUCE
// *********************

let letters = ["H", "E", "L", "P"];
let word;
 
// pvalue = previous value :: cvalue= current value
word= letters.reduce((pvalue, cvalue) => pvalue+cvalue) 
console.log(word)
