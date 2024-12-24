let currentInput = '';
let operator = null;
let expression = '';
let isResultDisplayed = false;

function appendNumber(number) {
  if (isResultDisplayed) {
    // Reset if user starts new input after displaying result
    expression = '';
    currentInput = '';
    isResultDisplayed = false;
  }
  currentInput += number;
  expression += number;
  updateDisplay();
}

function setOperator(op) {
  if (isResultDisplayed) {
    // Start a new calculation with the previous result
    isResultDisplayed = false;
  }

  if (currentInput === '' && operator) {
    operator = op;
    expression = expression.slice(0, -1) + op; // Replace last operator
    updateDisplay();
    return;
  }

  if (currentInput === '') return;

  operator = op;
  expression += op;
  currentInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  operator = null;
  expression = '';
  isResultDisplayed = false;
  updateDisplay();
  clearResult();
}

function deleteLast() {
  if (isResultDisplayed) {
    // Reset if delete is pressed after result is displayed
    expression = '';
    currentInput = '';
    isResultDisplayed = false;
    updateDisplay();
    return;
  }

  if (currentInput !== '') {
    currentInput = currentInput.slice(0, -1);
    expression = expression.slice(0, -1);
  } else if (expression.length > 0) {
    expression = expression.slice(0, -1);
  }
  updateDisplay();
}

function calculate() {
  if (expression === '') return;

  try {
    const result = eval(expression); // Evaluate the mathematical expression
    showResult(result);
    currentInput = '';
    operator = null;
    expression = result.toString(); // Keep the result for chaining calculations
    isResultDisplayed = true; // Mark that result is displayed
  } catch (error) {
    showResult('Error');
  }
}

function updateDisplay() {
  const inputDisplay = document.getElementById('input-display');
  inputDisplay.textContent = expression;
}

function showResult(result) {
  const resultDisplay = document.getElementById('result-display');
  resultDisplay.textContent = `= ${result}`;
}

function clearResult() {
  const resultDisplay = document.getElementById('result-display');
  resultDisplay.textContent = '';
}

function refreshPage() {
  location.reload();
}
