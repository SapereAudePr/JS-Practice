const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier, prevResult: prevResult, enteredNumber: operationNumber, result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntry);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === "+") {
        currentResult += enteredNumber;
        mathOperator = "+";
    } else if (calculationType === "-") {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if (calculationType === "*") {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else if (calculationType === "/") {
        currentResult /= enteredNumber;
        mathOperator = "/";
    } else {
        return;
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeLog(mathOperator, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult("+")
}

function subtract() {
    calculateResult("-")
}

function multiply() {
    calculateResult("*")
}

function divide() {
    calculateResult("/")
}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide)