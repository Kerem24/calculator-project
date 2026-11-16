let first = 0;
let second = 0;
const firstInput = document.getElementById("firstNumber");
const secondInput = document.getElementById("secondNumber");

// collector
function collector() {
    firstInput.addEventListener("input", (event) => {
        first = Number(event.target.value)
    });
    secondInput.addEventListener("input", (event) => {
        second = Number(event.target.value)
    })
}
collector();

let result = 0;
const buttons = document.querySelectorAll("button");
let text = document.querySelector("#result");
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (button.id === 'clear') return;
        if (firstInput.value === '' || secondInput.value === '') {
            return;
        }

        result = operate(first, event.target.value, second)
        console.log(result)
        text.innerHTML = `${result}`
        text.style.color = 'white'



    });
})



const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    firstInput.value = "";
    secondInput.value = "";
    first = 0;
    second = 0;
    text.innerHTML = "";
    text.style.empty()
});



function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(x, operator, y) {
    if (operator === "+") {
        return add(x, y);
    }
    if (operator === "-") {
        return subtract(x, y);
    }
    if (operator === "*") {
        return multiply(x, y);
    }
    if (operator === "/") {
        return divide(x, y);
    }
}
