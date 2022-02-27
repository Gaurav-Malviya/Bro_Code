// create HTML elements
// h1.innerHTML (vulnerable to XSS attacks)
// h1.innerText (better)

const headsama= document.createElement('h1');
const underline= document.createElement('u');

underline.innerText='Suup Bitches';
headsama.append(underline);
document.body.append(headsama);

const headjr= document.createElement('h2');
const italic= document.createElement('i');

italic.innerText="it has been a long time"
headjr.append(italic);
document.body.append(headjr)

const p = document.createElement("p");
const bold = document.createElement("b");
bold.innerText = "Bye...";
p.append(bold);
document.body.append(p);

