// Parameters
let displayValue = "";
let numHolder = "";
let resHolder = "";
let functionHolder = "";

// Math Buttons
const squareButton = document.getElementById("square");
squareButton.addEventListener('click', event => {
    const display = document.getElementById("displayNumber");
    // call square() with displayNumber
    let result = square(display.textContent);
    // push to equation space
    populateEquation(display.textContent, square);
    // push answer to displayNumber
    clearDisplay();
    populateDisplay(result);
});

const sqrtButton = document.getElementById("sqrt");
sqrtButton.addEventListener('click', event => {
    const display = document.getElementById("displayNumber");
    let result = squareroot(display.textContent);
    populateEquation(display.textContent, squareroot);
    clearDisplay();
    populateDisplay(result);
});

const factorialButton = document.getElementById("factorial");
factorialButton.addEventListener('click', event => {
    const display = document.getElementById("displayNumber");
    let result = factorial(display.textContent);
    populateEquation(display.textContent, factorial);
    clearDisplay();
    populateDisplay(result);
});

const plusMinusButton = document.getElementById("plusMinus");
plusMinusButton.addEventListener('click', event => {
    const display = document.getElementById("displayNumber");

    if (display.textContent == "0") {
        return;
    } else {
        let result = display.textContent* (-1);
        clearDisplay();
        populateDisplay(result);    
    }
});

// Clear buttons
const clearButton = document.getElementById("clear");
clearButton.addEventListener('click', event => {
    clearDisplay();
});

const allClearButton = document.getElementById("allClear");
allClearButton.addEventListener('click', event => {
    clearEquation();
    clearDisplay();
});

// Number Buttons

const oneButton = document.getElementById("one");
oneButton.addEventListener('click', event => {
    populateDisplay(1);
});

const twoButton = document.getElementById("two");
twoButton.addEventListener('click', event => {
    populateDisplay(2);
});

const threeButton = document.getElementById("three");
threeButton.addEventListener('click', event => {
    populateDisplay(3);
});

const fourButton = document.getElementById("four");
fourButton.addEventListener('click', event => {
    populateDisplay(4);
});

const fiveButton = document.getElementById("five");
fiveButton.addEventListener('click', event => {
    populateDisplay(5);
});

const sixButton = document.getElementById("six");
sixButton.addEventListener('click', event => {
    populateDisplay(6);
});

const sevenButton = document.getElementById("seven");
sevenButton.addEventListener('click', event => {
    populateDisplay(7);
});

const eightButton = document.getElementById("eight");
eightButton.addEventListener('click', event => {
    populateDisplay(8);
});

const nineButton = document.getElementById("nine");
nineButton.addEventListener('click', event => {
    populateDisplay(9);
});

const zeroButton = document.getElementById("zero");
zeroButton.addEventListener('click', event => { 
    // if display string is empty do nothing, otherwise populate one 0
    const display = document.getElementById("displayNumber");
    if (display.textContent == "0") {
        return;
    } else {
        populateDisplay(0);
    }
});

const doubleZeroButton = document.getElementById("doubleZero");
doubleZeroButton.addEventListener('click', event => {
    // if display string is empty do nothing, otherwise populate two 0's
    const display = document.getElementById("displayNumber");
    if (display.textContent == "0") {
        return;
    } else {
        populateDisplay(0);
        populateDisplay(0);
    }});

const decimalButton = document.getElementById("decimal");
decimalButton.addEventListener('click', event => {
    // if string doesn't contain "." populate, else do nothing
    const display = document.getElementById("displayNumber");
    if (!display.textContent.includes(".")) {
        populateDisplay(".");
    } else { return; }
});

// Math Functions 
function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 == 0) {
        return "ERROR"
    } else { return num1 / num2; }
}

function square(num1) {
    return num1 * num1;
}

function squareroot(num1) {
    return Math.sqrt(num1);
}

function exponent(num1, num2) {
    return num1 ** num2;
}

function factorial(num1) {
    let result = 1;
    if (num1 == 0) {
        return result;
    } else if (num1 < 0) {
        num1 *= -1;
        for (i = 1; i <= num1; i++) {
            result *= i;
        }
        result *= -1;
    } else {
        for (i = 1; i <= num1; i++) {
            result *= i;
        }
    }
    return result;
}

// Master Operation
function operate(...args) {
    let operation = args[0];
    let nums = [];

    for (i = 1; i < args.length; i++) {
        nums[i - 1] = args[i];
    }
    return operation(...nums);
}

// Populate and clear display areas
function clearDisplay() {
    const display = document.getElementById("displayNumber");
    display.textContent = "0";
}

function populateDisplay(num) {
    const display = document.getElementById("displayNumber");
    if (display.textContent == "0" && num == ".") {
        display.textContent += num;
    } else if (display.textContent == "0") {
        display.textContent = num;
    } else {
        display.textContent += num;
    }
}

function clearEquation() {
    const equation = document.getElementById("equationDisplay");
    equation.textContent = "";
}

function populateEquation(num, operation) {
    const equation = document.getElementById("equationDisplay");
    let symbol = "";

    if (operation == addition) { 
        symbol = " + ";
        updateText(num, symbol);
    } 
    else if (operation == subtraction) { 
        symbol = " - ";
        updateText(num, symbol);
    } 
    else if (operation == multiplication) { 
        symbol = " * ";
        updateText(num, symbol);
    } 
    else if (operation == division) { 
        symbol = " / ";
        updateText(num, symbol);
    } 
    else if (operation == square) {
        symbol = "^2";
        updateText(num, symbol);
    }  
    else if (operation == squareroot) { 
        symbol = "√";
        updateText(symbol, num);
    }
    else if (operation == exponent) { 
        symbol = "^";
        updateText(num, symbol);
    } 
    else if (operation == factorial) { 
        symbol = "!";
        updateText(num, symbol);
    } 

    function updateText(a, b) {
        equation.textContent = a + b;
    }
}