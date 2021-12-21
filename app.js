let calculator = { 
    currentOperand : '',
    previousOperand : '',
    operator: '',
    
    operate: (operator, currentOperand, previousOperand) => operator(currentOperand, previousOperand), 

    add : (a, b) => a + b, 
    subtract : (a, b) => a - b, 
    multiply : (a, b) => a * b, 
    divide : (a,b) => a/b,
}

const previousDisplay = document.querySelector('.previous');
const currentDisplay = document.querySelector('.current');

document.querySelectorAll('button').forEach(btn => btn.addEventListener('click', e => { 
    let atb = attribute => btn.getAttribute(attribute);

    if (atb('data-number')) { 
        calculator.currentOperand += atb('data-number'); 
        updateDisplay();
    }
    if (atb('data-action')) {
        if (!calculator.previousOperand) {
            calculator.previousOperand = calculator.currentOperand + " " + atb('data-action'); 
            calculator.currentOperand = '';
            updateDisplay();
        }
        // calculator.currentOperand = 

    }
}))

function updateDisplay() { 
    currentDisplay.textContent = calculator.currentOperand;
    previousDisplay.textContent = calculator.previousOperand;
}