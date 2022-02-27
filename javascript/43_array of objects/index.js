//array of objects

class perfume
{
    constructor(name, company)
    {
        this.name= name
        this.company= company
    }
}

let perfumeBox= []
let perfume1= new perfume('Oud Wood','Tom Ford')
let perfume2= new perfume('Sauvage Elixir','Christian Dior')
let perfume3= new perfume("Bleu De Chanel",'Chanel')
console.log(perfume1)
console.log(perfume2)

perfumeBox=[perfume1,perfume2,perfume3]

for(let i=0; i<perfumeBox.length; i++)
{
    console.log(perfumeBox[i].name)
}