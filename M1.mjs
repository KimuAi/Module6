import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let prijzen = [12.99, 14.99, 20.99, 29.99]

geefKorting(prijzen)

function geefKorting(prijzen){
    let som = (prijzen / 100) * 15 
    return som 
}   

for(let a = 0 ; a < prijzen.length; a++){
    let resultaat = prijzen[a] - geefKorting(prijzen[a])
    console.log(resultaat)
}

/* 12.99 / 100 * 15 = ....
12.99 - ... = nieuwprijs */