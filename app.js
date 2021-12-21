let value = "";
let previousValue = ""; 
let operator = "";

const add = (a, b) => Number(a) + Number(b); 
const subtract = (a, b) => Number(a) - Number(b); 
const multiply = (a, b) => Number(a) * Number(b); 
const divide = (a, b) => Number(a) / Number(b); 

const updateDisplay = () => {
    currentOutput.textContent = value;
    previousOutput.textContent = previousValue; 
}

const operate = (operator, a, b) => {
    let result;
    console.log(operator);
    switch (operator) { 
        case ("add"):
            result = add(a, b);
            break; 
        case ("subtract"):
            result = subtract(a, b);
            break;
        case ("multiply"):
            result = multiply(a, b);
            break;
        case ("divide"):
            result = divide(a, b);
            break;
    }
    previousValue = ""; 
    operator = "";
    value = String(result);
    updateDisplay();
} 

const currentOutput = document.querySelector('.current');
const previousOutput = document.querySelector('.previous')



document.querySelectorAll('[data-number]').forEach(btn => {
    btn.addEventListener('click', () => {
        let atb = btn.getAttribute("data-number");
        if (atb == "." && value.includes('.') ) return; 

        if (operator != "") {
            if(previousValue=="") {
            previousValue = value;
                value = "";
            }
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
                operate(operator, previousValue, value); 
                break; 
            case ("delete"):
                value = value.substring(0, value.length - 1); 
                updateDisplay();
                break;
            default:
                operator = atb;
                if(operator!="" && previousValue!="" && value!="") operate(operator, previousValue, value); 
                break;
        }
        console.log(atb)
    })
})