/* reduce() =  Reduces an array to a single value The return 
               value of the callback function is the accumulated 
               result, and is provided as an argument in the next call 
               to the callback function. */

let letters= ['h','e','l','p']

function combineLetters(total, nextLetter)
{
    return total + nextLetter
}

let word= letters.reduce(combineLetters)
console.log(word)
 