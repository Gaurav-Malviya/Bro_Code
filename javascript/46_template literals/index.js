
// New feature as of (ES6)

// template literals = It is an another way of formatting output that can 
//                     contain placeholders for formatting and inserting:
//                     strings/values/variables/etc.
//                     we use combination of ` backticks and ${} placeholder
//                     to create a template literal.

let firstName= 'Tom';
let lastName= 'Ford';

let price= 10;
let taxRate= 0.05;
let total;

console.log(`Hello ${firstName} ${lastName}!
Your suit is ready, sir.`);

console.log(`The price: $${price}`);
console.log(`tax rate: $${taxRate}`);
console.log(`Tax: $${price*taxRate}`);
console.log(`Total: $${price+(price*taxRate)}`)
