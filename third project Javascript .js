JavaScript (in script.js file):
```
let display = document.getElementById('display');
let clearButton = document.getElementById('clear');
let equalsButton = document.getElementById('equals');
let numbers = document.querySelectorAll('.buttons button:not(#clear, #equals, #backspace, #divide, #multiply, #subtract, #add)');
let operators = document.querySelectorAll('.buttons button#divide, button#multiply, button#subtract, button#add');
let currentNumber = '';
let previousNumber = '';
let currentOperator = '';

numbers.forEach(button => {
    button.addEventListener('click', () => {
        currentNumber += button.textContent;
        display.value = currentNumber;
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        previousNumber = currentNumber;
        currentNumber = '';
        currentOperator = button.textContent;
    });
});

equalsButton.addEventListener('click', () => {
    let result;
    switch (currentOperator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            result = 0;
    }
    display.value = result.toString();
});

clearButton.addEventListener('click', () => {
    currentNumber = '';
    previousNumber = '';
    currentOperator = '';
    display.value = '';
});


