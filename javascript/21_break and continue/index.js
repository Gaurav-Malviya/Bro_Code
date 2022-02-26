/* break = used to exit out of a loop
   continue = skips over an iteration of a loop */

console.log("USING break:")
for(let i=0; i<10; i+=1)
{
    if(i==7)
    {
        break
    }
    console.log(i)
}

console.log("USING continue:")
for(let i=0; i<10; i+=1)
{
    if(i==7)
    {
        continue
    }
    console.log(i)
}