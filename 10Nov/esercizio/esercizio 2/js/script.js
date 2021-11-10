const sum = (numOne, numTwo) => numOne + numTwo;
const mult = (numOne, numTwo) => numOne * numTwo;
const sottr = (numOne, numTwo) => numOne - numTwo;
const divis = (numOne, numTwo) => numOne / numTwo;
const potens = (numOne, numTwo) => Math.pow(numOne, numTwo);
const radic = (numOne) => Math.sqrt(numOne);

function operationFunc(operation, parsedNumbers) {

    if (operation === "somma" || '+') {
        return sum(parsedNumbers);
    }

    if (operation === "moltiplicazione" || '*') {
        return mult(parsedNumbers);
    }

    if (operation === "sottrazione" || '-') {
        return sottr(parsedNumbers);
    }

    if (operation === "divisione" || '/') {
        return divis(parsedNumbers);
    }

    if (operation === "potenza") {
        return potens(parsedNumbers);
    }

    if (operation === "radice" || '√') {
        return radic(parsedNumbers);
    } else {
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
try {
    if (operation != "+" || "somma") throw "Devi inserire una operazione";
    if (operation != "-" || "sottrazione") throw "Devi inserire una operazione";
    if (operation != "*" || "moltiplicazione") throw "Devi inserire una operazione";
    if (operation != "/" || "divisione") throw "Devi inserire una operazione";
    if (operation != "potenza") throw "Devi inserire una operazione ";
    if (operation != "radice" || "√") throw "Devi inserire una operazione ";
    if (operation === "") throw "Devi inserire una operazione";
    if (numbersChoiche === "") throw "Devi inserire almeno un numero";
    if (numbersChoiche === "") throw "Devi inserire almeno un numero";
    if (numbersChoiche != "\,") throw "Devi inserire almeno un numero";
} catch (err) {
    console.log(err);
} finally {
    console.log("Bravo.");
}
const numbers = [...numbersChoiche.split(",")];
console.log(numbers)
const parsedNumbers = [];

for (x of numbers) {
    parsedNumbers.push(parseInt(x));
}




calculator(operation, parsedNumbers);

console.log(calculator(operation, parsedNumbers));