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

const sum = (numOne, numTwo) => numOne + numTwo;
const mult = (numOne, numTwo) => numOne * numTwo;
const sottr = (numOne, numTwo) => numOne - numTwo;
const divis = (numOne, numTwo) => numOne / numTwo;
const potens = (numOne, numTwo) => Math.pow(numOne, numTwo);
const radic = (numOne) => Math.sqrt(numOne);

function operationFunc(operation, parsedNumbers) {

    if (operation === "somma" || '+') {
        return sum(...parsedNumbers);
    }

    if (operation === "moltiplicazione" || '*') {
        return mult(...parsedNumbers);
    }

    if (operation === "sottrazione" || '-') {
        return sottr(...parsedNumbers);
    }

    if (operation === "divisione" || '/') {
        return divis(...parsedNumbers);
    }

    if (operation === "potenza") {
        return potens(...parsedNumbers);
    }

    if (operation === "radice" || '√') {
        return radic(...parsedNumbers);
    }

    else {
        allert('Attenzione Bisogna inserire almeno un numero');
    }
}


function calculator(numbers) {
    let totOperation = 0;
    totOperation = operationFunc(...numbers);
    return 'Il risultato è: ', totOperation;
}


let operation = prompt("Inserisci operazione: ");
let numbersChoiche = prompt("Inserisci numeri: ");
const numbers = [...numbersChoiche.split(",")];
console.log(numbers)
const parsedNumbers = [];

for (x of numbers) {
    parsedNumbers.push(parseInt(x));
}




calculator(operation, parsedNumbers);

console.log(calculator(operation, parsedNumbers));

