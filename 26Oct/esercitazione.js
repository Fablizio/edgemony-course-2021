/* 
    Sulla base di quanto detto a lezione, creare una calcolatrice capace di svolgere diverse operazioni
    (più ne mettete meglio è!).
    La scelta dell'operazione da effettuare (per esempio somma)
    e la scelta dei numeri, deve essere specificata dell'utente.
    A tal fine, potrete utilizzare la funzione 'prompt()' per catturarne i dati.
    
    ATTENZIONE:
    L'utilizzo delle callbacks, delle arrow function e dello spread operator
    sono elementi fondamentali di questa esercitazione, mi raccomando.

    Potete chiaramete controllare il codice scritto a lezione, ma cercate di non copiare.
*/

/* Esercizio avanzato:
    Oltre alle classici funzioni somma, moltiplicazione, ecc... provate ad implementare
    l'operazione potenza e l'operazione radice quadrata.
    SUGGERIMENTO: esistono delle funzioni della libreria Math (vista a lezione).
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/


calculator(operationChoice, parsedNumbers);

console.log(calculator(operationChoice, parsedNumbers));


const sum = (numOne, numTwo) => numOne + numTwo;
const mult = (numOne, numTwo) => numOne * numTwo;
const diff = (numOne, numTwo) => numOne - numTwo;
const div = (numOne, numTwo) => numOne / numTwo;
const pow = (numOne, numTwo) => numOne ** numTwo;
const square = (numOne, numTwo) => Math.sqrt(numOne, numTwo);

function calculator(operation, numbers) {
    let totOperation = 0;
    totOperation = operation(...numbers);
    return totOperation;
}

let operationChoice = prompt("Scegli un'operazione tra:\n-somma (+)\n-differenza (-)\n-moltiplicazione (*)\n-divisione (/)\n-potenza (^)\n-radice (r)");
let numbersChoice = prompt("Scegli i numeri (separati da virgola): ").replace(" ", "");

if (numbersChoice == "") {
    alert("Non hai inserito i valori!");
} else {
    const numbers = numbersChoice.split(",");
    const parsedNumbers = [];

    for (x of numbers) {
        parsedNumbers.push(parseInt(x));
    }

    console.log(parsedNumbers.lenght);

    switch (parsedNumbers.length) {

        case 1:
            alert(parsedNumbers[0]);
            break

        default:

            switch (operationChoice) {
                case "somma": case "+":
                    alert(calculator(sum, parsedNumbers));
                    break
                case "moltiplicazione": case "*":
                    alert(calculator(mult, parsedNumbers));
                    break
                case "differenza": case "-":
                    alert(calculator(diff, parsedNumbers));
                    break
                case "divisione": case "/":
                    if (numbers[1] != 0) {
                        alert(calculator(div, parsedNumbers));
                        break
                    } else {
                        alert("impossibile dividere per 0");
                        break
                    }
                case "potenza": case "^":
                    alert(calculator(pow, parsedNumbers));
                    break
                case "radice": case "r":
                    alert(calculator(square, parsedNumbers));
                    break
                default:
                    alert("Scelta non valida");
            }
    }
}
