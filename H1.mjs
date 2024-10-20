import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let array = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5]

let resultaat = array.sort()

console.log(resultaat)