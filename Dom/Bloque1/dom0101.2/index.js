let btnRojo = document.getElementById("btnRojo");
let btnVerde = document.getElementById("btnVerde");
let btnAzul = document.getElementById("btnAzul");
let textInput = document.getElementById("textInput")

btnRojo.addEventListener("click", color);
btnVerde.addEventListener("click", color);
btnAzul.addEventListener("click", color);

function color() 
{
    let color = (window.getComputedStyle(btnRojo)).getPropertyValue('background-color');
    textInput.style.backgroundColor = color;
}

function verde()
{
    let color = (window.getComputedStyle(btnVerde)).getPropertyValue('background-color');
    textInput.style.backgroundColor = color;
}

function azul()
{
    let color = (window.getComputedStyle(btnAzul)).getPropertyValue('background-color');
    textInput.style.backgroundColor = color;
}