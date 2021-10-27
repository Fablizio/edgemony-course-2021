const enlightBtn = document.querySelector(".enlight")
const compet = document.getElementById("wrapper")

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