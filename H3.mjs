import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let xpositie = parseFloat(await userInput.question("Geef me een X positie: "));
let ypositie = parseFloat(await userInput.question("Geef me een Y positie: "));

let lengte = parseFloat(await userInput.question("Lengte van je boot van 2 tot 5: "));
let directie = await userInput.question("Geef me een richting (up, down, left of right): ");

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

boot(lengte, directie);

let vraag = parseFloat(await userInput.question("Geef me een X positie om te schieten: "));
let vraag1 = parseFloat(await userInput.question("Geef me een Y positie om te schieten: "));
shoot(vraag, vraag1);

function shoot(xposition, yposition) {
  spel[xposition][yposition] = "*";
  
  console.log("U heeft geschoten op X positie " + xposition + " en Y positie " + yposition + "!");
  console.log(spel);
}

function boot(lengte, directie) {
  if (lengte <= 5 && lengte >= 2) {
    switch (directie) {
      case "left":
        for (let a = 0; a < lengte; a++) {
            if (ypositie - a < 0 || ypositie - a > 9) {
                return console.log("You are out of the playfield")
            }
            spel[xpositie][ypositie - a] = "B";
        }
        break;

      case "right":
        for (let a = 0; a < lengte; a++) {
            if (ypositie + a < 0 || ypositie + a > 9) {
                return console.log("You are out of the playfield")
            }
            spel[xpositie][ypositie + a] = "B";
        }
        break;

      case "up":
        for (let a = 0; a < lengte; a++) {
            if (xpositie - a < 0 || xpositie - a > 9) {
                return console.log("You are out of the playfield")
            }
            spel[xpositie - a][ypositie] = "B";
        }
        break;

      case "down":
        for (let a = 0; a < lengte; a++) {
            if (xpositie + a < 0 || xpositie + a > 9) {
                return console.log("You are out of the playfield")
            }
            spel[xpositie + a][ypositie] = "B";
        }
        break;

      default:
        console.log("Ongeldig");
    }
    console.log(spel);
  } else {
    console.log("Lengte van de boot moet tussen 2 en 5 zijn! ");
  }
}
