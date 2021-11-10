// -------------------------------------------------calc 2 ----------------------------------------------------
/*Riprendendo la vostra calcolatrice passata (scegliete voi la più adatta, non importa se la prima o una delle successive): 
implementate try e catch che sollevino un'eccezzione (throw) se:
il numero passato come parametro è uno solo => errore: Hai passato un solo valore
non è stato passato alcun parametro => errore: Nessun parametro passato alla funzione
AVANZATO
Per i più audaci, sempre sulla base dell'ex. della calcolatrice, creare una sorta di log che tenga conto dell'ultima operazione svolta 
e che la immagazzini nel local storage. Attenzione, con l'ultima operazione non si intende il risultato, ma proprio l'operazione,
 ex: 35 + 22 + 11 Infine, un ulteriore bottone Recap, al suo click, ritornerà (come alert) l'operazione e il suo risultato. 
 (Grazie per lo spunto :)*/



function saveCredentials(operation) {
    window.localStorage.setItem("operation", operation);
}

function loadCredentials(key) {
    return window.localStorage.getItem(key);
}


function calculator(numbers) {
    try {

        const sum = () => numbers.reduce((acc, num) => acc + num);
        const sub = () => numbers.reduce((acc, num) => acc - num);
        const mul = () => numbers.reduce((acc, num) => acc * num);
        const div = () => numbers.reduce((acc, num) => acc / num);
        const pow = () => numbers.reduce((acc, num) => Math.pow(acc, num));
        const powEach = () => numbers.map(num => num * num);
        const sqrt = () => numbers.map(num => Math.sqrt(num));

        if (numbers.length === 1) throw "errore: Hai passato un solo valore"
        if (numbers.length === 0) throw "Nessun parametro passato alla funzione"

        return {
            sum: sum(),
            sub: sub(),
            mol: mul(),
            div: div(),
            pow: pow(),
            powEach: powEach(),
            sqrt: sqrt()
        };
    } catch (err) {

        switch (err) {
            case 'errore: Hai passato un solo valore':
                console.warn('servono almeno due valori per far funzionare la calcolatrice ')
                break;

            case 'Nessun parametro passato alla funzione':
                console.error('devi inserire i numeri per il calcolo')
                break;
        }

    }

}



const inputNumbers = document.querySelector('#nums')
const inputOperator = document.querySelector('#oper')
const btnCalc = document.querySelector('#btnCalc')
const recap = document.querySelector('#recap')
const log = document.querySelector('.operation')


btnCalc.addEventListener("click", (eve) => {
    const numberArr = inputNumbers.value.split(',').map(function (item) {
        return parseInt(item);
    });
    loadCredentials(saveCredentials(numberArr.join(inputOperator.value)));
    log.innerHTML = (numberArr.join(inputOperator.value));
})


recap.addEventListener("click", (eve) => {

    const numberArr = inputNumbers.value.split(',').map(function (item) {
        return parseInt(item);
    });

    const resutls = calculator(numberArr)
    if (inputOperator.value === '+') {
        alert(`il risultato è ${resutls.sum}`)
    }
    if (inputOperator.value === '-') {
        alert(`il risultato è ${resutls.sub}`)
    }
    if (inputOperator.value === '*') {
        alert(`il risultato è ${resutls.mul}`)
    }
    if (inputOperator.value === '/') {
        alert(`il risultato è ${resutls.div}`)
    }
    if (inputOperator.value === 'pow') {
        alert(`il risultato è ${resutls.pow}`)
    }
    if (inputOperator.value === 'powEach') {
        alert(`il risultato è ${resutls.powEach}`)
    }
    if (inputOperator.value === 'sqrt') {
        alert(`il risultato è ${resutls.sqrt}`)
    }

})