import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let vraag = parseFloat(await userInput.question("Geef me een X positie: "))
let vraag1 = parseFloat(await userInput.question("Geef me een X positie: "))

let spel = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

shoot(vraag, vraag1);

function shoot(xposition, yposition) {
  spel[xposition][yposition] = "*";
  
  console.log("U heeft geschoten op x positie " + xposition + " en y positie " + yposition + "!");
  console.log(spel)
}
