let userinput = prompt("Inserisci un numero");
let userinput2 = prompt("Inserisci un numero");
let userops = prompt("Scegli un'operazione");

console.log(userinput);
console.log(userops);

let userinputTransformed = parseInt(userinput);
let userinputTransformed2 = parseInt(userinput2);

function sum(userinputTransformed, userinputTransformed2, userops){
    const result;
if (userops === "+") {
    result = userinputTransformed + userinputTransformed2;
    return result;
}
}


