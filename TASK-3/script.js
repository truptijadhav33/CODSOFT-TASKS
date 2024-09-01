// Initialize variables to store current value, operator, and result
let currentValue = '';
let operator = '';
let result = null;

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Function to update the display
function updateDisplay(value) {
    display.value = value;
}

// Event listener for all buttons
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            // Clear the display and reset all variables
            currentValue = '';
            operator = '';
            result = null;
            updateDisplay('');
        } else if (value === 'DEL') {
            // Delete the last character from the display
            currentValue = currentValue.slice(0, -1);
            updateDisplay(currentValue);
        } else if (value === '=') {
            // Calculate the result based on the operator
            if (operator && currentValue) {
                if (operator === '+') {
                    result += parseFloat(currentValue);
                } else if (operator === '-') {
                    result -= parseFloat(currentValue);
                } else if (operator === '*') {
                    result *= parseFloat(currentValue);
                } else if (operator === '/') {
                    result /= parseFloat(currentValue);
                }
                updateDisplay(result);
                currentValue = result.toString();
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            // Set the operator and store the current value as result
            if (currentValue && !operator) {
                result = parseFloat(currentValue);
                operator = value;
                currentValue = '';
            }
        } else {
            // Append the clicked button value to the current value
            currentValue += value;
            updateDisplay(currentValue);
        }
    });
});
