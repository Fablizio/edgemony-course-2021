
const btnPar = document.querySelector(".button-name");

const newParagraph = document.createElement("p");
newParagraph.className = "new-paragraph";
btnPar.after(newParagraph);

const userWritten = () => {
    const insert = prompt("Inserisci qui il tuo testo!");
    newParagraph.textContent = insert;
}

btnPar.addEventListener("click", userWritten);


//Function per aggiungere elementi alla lista

function addLi() {

    let txtVal = document.getElementById('txtVal').value,
        listNode = document.getElementById('list'),
        liNode = document.createElement("LI"),
        txtNode = document.createTextNode(txtVal);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);

}

