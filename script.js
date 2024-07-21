const currDisplay = document.querySelector(".curr-display")
const prevDisplay = document.querySelector(".prev-display")
const numbers = document.querySelector(".number")
const operands = document.querySelector(".operation")
const clearBtn = document.querySelector(".clear")
const delBtn = document.querySelector(".delete")
const equalBtn = document.querySelector(".equal")
let operation;

function appendNumber(number) {
    if (number == "." && currDisplay.innerHTML.includes(".")) return; currDisplay.innerHTML += number;
}

function chooseOperation(operand) {
    if (currDisplay.innerHTML == "") return;
    compute(operand);
    operation = operand;
    currDisplay.innerText += operand;
    prevDisplay.innerText = currDisplay.innerText;
    currDisplay.innerText = "";
}

function clearDisplay() {
    currDisplay.innerText = "";
    prevDisplay.innerText = "";
}