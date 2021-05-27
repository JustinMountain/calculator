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