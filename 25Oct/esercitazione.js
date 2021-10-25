/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
// RISPOSTA: Stampa PI per due volte il primo del consolle log riga 11 successivamente viene stampato quello dentro if essendo maggiore di 3

const PI = 3.14;

console.log(PI);

if (PI >= 3) {
  console.log(PI);
}

// Es. 2: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: Il mio colore preferito è violet e subito sotto Ci sono 12 mesi in un anno (il primo viene stampato perchè la condizione true è verificata successivamente il secondo esterno dalla condizione)

var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Es. 3: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: (questo viene gestita dalla prima funcion che richiama l'if) Sugo di pomodoro freschissimo, rucola, prosciutto crudo e scaglie di grana.
//dalla linea 42 alla 45 non viene dichiaratata la variabile theSecond che quindi richiamerà un errore Uncaught ReferenceError

function makePizza(moreIngredients) {
  let theSecond = "Sugo di pomodoro freschissimo";
  // { ... }
  console.log(theSecond + ", " + moreIngredients);
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}

if (true) {
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  console.log("Il secondo ingrediente necessario: ", theSecond);
}
