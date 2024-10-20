import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let naam;
let studentenLijst = ["Kim", "Ludger", "Damian"];

for(let a = 0; a < studentenLijst.length; a++){
    console.log(studentenLijst[a] + " je bent uitgenoding voor de leukste vak Programming Fundamentals" );
}