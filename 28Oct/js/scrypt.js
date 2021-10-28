const enlightBtn = document.querySelector(".enlight")
const compet = document.getElementById("wrapper")
const picBtn = document.querySelector(".show_pic")

enlightBtn.addEventListener("click", () => {
    document.getElementById("hobby").className = "enlight-mode"
});

const darkModeBtn = document.querySelector('.enableDarkMode');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle ('darkMode');
});


function changebackColor() {
    document.body.style.backgroundColor = "black";
    document.getElementByID("divID").style.backgroundColor = "black";
}

compet.addEventListener("mouseover", () => {
    compet.classList.toggle("mouse")
});

document.addEventListener("click", (event) => {
    const sections = event.target.getElementsByTagName("p").length;
    console.log(event.target)
    console.log(sections)
});

picBtn.addEventListener("click", () => {
    document.getElementById('pic').style.display = 'block';
});

//timer

let timer = 0;
function change() {
    let tondo = document.getElementById("hobby2");
    let color = ["black", "blue", "brown", "green"];
    tondo.style.backgroundColor = color[timer];
    timer = (timer + 1) % color.length;
}

const intervalColor = setInterval(change, [500]);


document.addEventListener ('keypress' , (event) => {
    if (event.key === 'Enter') {
        clearInterval (intervalColor);
        timer = null;
    }
})


// somma dei numeri

document.addEventListener ('click',(Event) => {
    const somma = document.querySelector('.somma');
    let input = prompt ('inserisci qui i due numeri');
    const numbs = input.split (',');

    const putNumb = [];

    for (x of numbs) {
        putNumb.push (parseInt(x))
    }

    const sum = (numOne, numTwo) => numOne + numTwo;

    function calculator (operation) {
    let totSum = 0;
    totSum = operation(...putNumb)
    return totSum;
    }

    calculator(sum)

    setTimeout (() => {console.log (calculator(sum))}, 5000);

})