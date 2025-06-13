let history = []; // Array to store calculation history

// Function to append values to the display
function appendValue(value) {
  const display = document.getElementById('display');
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
}

// Function to delete the last character
function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

// Function to calculate the square root
function calculateSquareRoot() {
  const display = document.getElementById('display');
  const result = Math.sqrt(parseFloat(display.value)) || '';
  history.push(`√${display.value} = ${result}`); // Add to history
  display.value = result;
}

// Function to calculate the result
function calculateResult() {
  const display = document.getElementById('display');
  try {
    // Evaluate the expression in the display
    display.value = eval(display.value);
  } catch (error) {
    // Handle invalid expressions
    display.value = 'Error';
  }
}

// Function to show history
function showHistory() {
  alert('Calculation History:\n' + history.join('\n')); // Display history in an alert
}

