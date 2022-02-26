/* map() performs a function for each element in an array, then
   stores the returned value in a new array */

   let storeUSD= [5,6,7,8,9]

   function toEURO(value)
   {
       value *=0.85
       return value
   }

   storeEUR= storeUSD.map(toEURO)
   console.log(storeUSD)
   console.log(storeEUR)