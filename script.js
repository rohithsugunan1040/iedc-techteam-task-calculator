document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  const key = event.key;

  if (isNumber(key)) {
    event.preventDefault();
    appendToResult(key);
  } else if (key === '.' && !hasDecimalPoint()) {
    event.preventDefault();
    appendToResult(key);
  } else if (isOperator(key)) {
    event.preventDefault();
    appendToResult(key);
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    event.preventDefault();
    clearLastCharacter();
  } else if (key === 'Escape') {
    event.preventDefault();
    clearResult();
  }
}

function isNumber(key) {
  return /[0-9]/.test(key);
}

function hasDecimalPoint() {
  var result = document.getElementById('result').value;
  return result.includes('.');
}

function isOperator(key) {
  return key === '/' || key === '*' || key === '-' || key === '+';
}

function appendToResult(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function clearLastCharacter() {
  var result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}

function calculate() {
  var result = document.getElementById('result').value;
  try {
    var calculatedResult = eval(result);
    document.getElementById('result').value = calculatedResult;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
