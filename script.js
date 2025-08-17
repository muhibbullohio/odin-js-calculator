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

const OPERATIONS = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

function operate(op, num1, num2) {
  console.log(`num1: ${num1}, num2: ${num2}`);
  return OPERATIONS[op](num1, num2);
}

// SELECT UI ELEMENTS
const numberBtns = document.querySelectorAll(".btn--num");
const display = document.querySelector(".display p");
const operationBtns = document.querySelectorAll(".btn--op");
const equalBtn = document.querySelector(".btn--equal");
const allClearBtn = document.querySelector(".btn--ac");

let num1, num2;

Array.from(numberBtns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    display.innerText += e.target.innerText;
    if (num2 === null) {
      num2 = parseInt(display.innerText);
    } else {
      num1 = parseInt(display.innerText);
    }
  });
});

let operand;
Array.from(operationBtns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    display.innerText = "";
    operand = e.target.innerText;
    num2 = null;
  });
});

equalBtn.addEventListener("click", () => {
  num1 = display.innerText = operate(operand, num1, num2);
});

allClearBtn.addEventListener("click", () => {
  display.innerText = "";
});
