let value = "";

const add = (a, b) => a + b; 
const subtract = (a, b) => a - b; 
const multiply = (a, b) => a * b; 
const divide = (a, b) => a / b; 
const operate = (operator, a, b) => operator(a, b); 

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

