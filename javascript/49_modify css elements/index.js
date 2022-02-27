document.querySelector('#myButton').onclick= function(){
    const h1     = document.querySelector('#myH1');
    const hpower = document.querySelector('#power');
    console.log(h1.style);
    h1.style.color='orange';
    h1.style.backgroundColor='black';
    h1.style.textAlign='center'
    hpower.style.textAlign='center'
    hpower.style.color='brown'
    document.body.style.fontFamily='Verdana';
    document.body.style.backgroundColor='white';
}