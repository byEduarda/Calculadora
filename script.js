const currDisplay = document.querySelector(".curr-display")
const prevDisplay = document.querySelector(".prev-display")
const numbers = document.querySelectorAll(".number")
const operands = document.querySelectorAll(".operation")
const clearBtn = document.querySelector(".clear")
const delBtn = document.querySelector(".delete")
const equalBtn = document.querySelector(".equal")
let operation = null;

function appendNumber(number) {
    if (number === "." && currDisplay.innerHTML.includes(".")) return;
    currDisplay.innerText += number;
}

function chooseOperation(operand) {
    if (currDisplay.innerHTML === "") return;
    if (prevDisplay.innerHTML !== "") {
        compute(operand);
    }
    
    operation = operand;
    currDisplay.innerHTML += operand;
    prevDisplay.innerHTML = currDisplay.innerText + operand;
    currDisplay.innerHTML = "";
}

function clearDisplay() {
    currDisplay.innerHTML = "";
    prevDisplay.innerHTML = "";
    operation = null;
}

function compute(operand) {
    let result;
    const previousValue = parseFloat(prevDisplay.innerHTML);
    const currentValue = parseFloat(currDisplay.innerHTML);

    if (isNaN(previousValue) || isNaN(currentValue)) return;
    
    switch (operation) {
        case "+":
            result = previousValue + currentValue;
            break;
        case "-":
            result = previousValue - currentValue;
            break;
        case "*":
            result = previousValue * currentValue;
            break;
        case "/":
            result = previousValue / currentValue;
            break;
        default:
            return;
    }
    currDisplay.innerHTML = result;
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        appendNumber(number.innerHTML);
    });
});

operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        chooseOperation(operand.innerHTML);
    });
});

clearBtn.addEventListener("click", () => {
    clearDisplay();
});

equalBtn.addEventListener("click", () => {
    compute();
    prevDisplay.innerHTML = "";
});

delBtn.addEventListener("click", () => {
    currDisplay.innerHTML = currDisplay.innerHTML.slice(0, -1);
});