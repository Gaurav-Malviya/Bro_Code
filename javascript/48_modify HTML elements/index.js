// modify HTML elements
// document.getElementById() (older)
// document.querySelector()  (newer, more powerful)

document.querySelector('#myButton').onclick = function(){
    const h1a= document.querySelector('#myH1');
    const underline= document.createElement('u');
    underline.innerText='Bye World';
    h1a.innerText=" "
    h1a.append(underline)

    const p = document.querySelectorAll('.myP')
    p.forEach(element=>element.innerText="WOOOOAAAHHHHH!!!")

    document.body.style.color='white'
    document.body.style.backgroundColor= 'grey'

    const buttons = document.querySelectorAll('button')
    buttons.forEach(element=>element.remove())
}