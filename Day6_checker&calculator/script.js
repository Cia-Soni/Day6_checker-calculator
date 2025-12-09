// ----------------------
// EVEN / ODD CHECKER
// ----------------------
function checkEvenOdd() {
    const num = document.getElementById("numberInput").value;
    const result = document.getElementById("result");

    if (num === "") {
        result.textContent = "Please enter a number!";
        result.style.color = "red";
        return;
    }

    if (num % 2 === 0) {
        result.textContent = num + " is EVEN ✔";
        result.style.color = "green";
    } else {
        result.textContent = num + " is ODD ✔";
        result.style.color = "blue";
    }
}


// ----------------------
// SIMPLE CALCULATOR
// ----------------------
function calculate(operation) {
    const n1 = parseFloat(document.getElementById("calcNum1").value);
    const n2 = parseFloat(document.getElementById("calcNum2").value);
    const output = document.getElementById("calcResult");

    if (isNaN(n1) || isNaN(n2)) {
        output.textContent = "Enter both numbers!";
        output.style.color = "red";
        return;
    }

    let result;

    switch (operation) {
        case 'add': result = n1 + n2; break;
        case 'sub': result = n1 - n2; break;
        case 'mul': result = n1 * n2; break;
        case 'div': 
            result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero!";
            break;
    }

    output.textContent = "Result: " + result;
    output.style.color = "green";
}
