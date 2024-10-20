import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let a = 0
let b = 1;

let array = [a]
/* or array.push[a]*/

while (array.length < 10){ 
    array.push(b) 
    let c = a + b; 
    a = b;
    b = c;
}
console.log(array)