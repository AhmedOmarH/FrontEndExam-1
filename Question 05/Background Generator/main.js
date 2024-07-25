let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.body;
let colorDisplay = document.querySelector("#colorDisplay");

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    colorDisplay.textContent = `${color1.value} to ${color2.value}`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);