let value = "";
let previousValue = ""; 
let operator = "";

const add = (a, b) => a + b; 
const subtract = (a, b) => a - b; 
const multiply = (a, b) => a * b; 
const divide = (a, b) => a / b; 
const operate = (operator, a, b) => {
 
} 

const currentValue = document.querySelector('.current');
const updateDisplay = () => currentValue.textContent = value; 

document.querySelectorAll('[data-number]').forEach(btn => {
    btn.addEventListener('click', () => {
        let atb = btn.getAttribute("data-number");
        if (atb=="." && value.includes('.')) return; 
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
                console.log(value.lengt);
                value = value.substring(0, value.length - 1); 
                updateDisplay();
                break;
        }

    })
})