const currDisplay = document.querySelector(".curr-display")
const prevDisplay = document.querySelector(".prev-display")
const numbers = document.querySelector(".number")
const operands = document.querySelector(".operation")
const clearBtn = document.querySelector(".clear")
const delBtn = document.querySelector(".delete")
const equalBtn = document.querySelector(".equal")
let operation

function appendNumber(number) {
    if (number == "." && currDisplay.innerHTML.includes("."))return
    currDisplay.innerHTML += number
}

function chooseOperation(operand) {
    if (currDisplay.innerHTML == "") return
    compute(operand)
    operation = operand
    currDisplay.innerHTML += operand
    prevDisplay.innerHTML = currDisplay.innerText
    currDisplay.innerHTML = ""
}

function clearDisplay() {
    currDisplay.innerHTML = ""
    prevDisplay.innerHTML = ""
}

function compute(operand) {
    let result
    const previousValue = parseFloat(prevDisplay.innerHTML)
    const currentValue = parseFloat(currDisplay.innerHTML)

    if (isNaN(previousValue) || isNaN(currentValue)) return
    
    switch (operation) {
        case "+":
            result = previousValue + currentValue;
            break
        case "-":
            result = previousValue - currentValue;
            break
        case "*":
            result = previousValue * currentValue;
            break
        case "/":
            result = previousValue / currentValue;
            break
        default:
            return
    }
    currDisplay.innerHTML = result
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        appendNumber(number.innerHTML);
    })
})

operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        chooseOperation(operand.innerHTML);
    })
})

clearBtn.addEventListener("click", () => {
    clearDisplay()
})

equalBtn.addEventListener("click", () => {
    compute();
    prevDisplay.innerHTML = ""
})

delBtn.addEventListener("click", () => {
    currDisplay.innerHTML = currDisplay.innerHTML.slice(0, -1);
})