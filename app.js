let value = "";
let previousValue = ""; 
let operator = "";

const add = (a, b) => a + b; 
const subtract = (a, b) => a - b; 
const multiply = (a, b) => a * b; 
const divide = (a, b) => a / b; 
const operate = (operator, a, b) => {
    let result; 
    switch (operator) { 
        case ("add"):
            result = add(a, b);
            break; 
        case ("subtract"):
            result = subtract(a, b);
            break;
        case ("multiply"):
            result = multiply(a, b);
        case ("divide"):
            result = divide(a, b);
    }
    return result;
} 

const currentOutput = document.querySelector('.current');
const previousOutput = document.querySelector('.previous')

const updateDisplay = () => {
    currentOutput.textContent = value;
    previousOutput.textContent = previousValue; 
}

document.querySelectorAll('[data-number]').forEach(btn => {
    btn.addEventListener('click', () => {
        let atb = btn.getAttribute("data-number");
        if (atb == "." && value.includes('.')) return; 

        if (operator != "" && previousValue=="") {
            previousValue = value;
            value = "";
        }

        value += atb;
        updateDisplay();
    })
})

document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => { 
        atb = btn.getAttribute('data-action');

        switch (atb) {
            case ("clear"):
                value = "";
                previousValue = "";
                operator = "";
                updateDisplay();
                break;
            case ("equal"):
                break; 
            case ("delete"):
                value = value.substring(0, value.length - 1); 
                updateDisplay();
                break;
            default:
                operator = atb;
                break;
        }
        console.log(operator);
    })
})