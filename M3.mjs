import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let keuze = await userInput.question("kies uit 1 van deze namen: Amin, Sofie, Samantha, Karel, Mehdi, Joris, Nuria: ")
let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"]

function keuzen(naam){
    let resultaat = -1
    for(let a = 0; a < namen.length; a++){

        if(namen[a] == naam){
        resultaat = a
        }
    }
    return resultaat
}console.log(keuzen(keuze))
