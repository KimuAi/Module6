import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let som = 0
let punten = [10, 12, 14 , 20];
let resultaat;

for(let a = 0 ; a < punten.length; a++){
    som += punten[a]
    
}
resultaat = som / punten.length
console.log(resultaat)
