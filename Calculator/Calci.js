const calculator = {
    display: '0',
    first: null,
    second: false,
    operator: null,
  };

  function inputDigit(digit) {
    const display = calculator.display;
    const second = calculator.second;
  
    if (second === true) {
      calculator.display = digit;
      calculator.second = false;
    }
    else {
      if(display === '0'){
        calculator.display = digit;
      }
      else{
        calculator.display = display + digit;
      }
    }
  }

  function inputDecimal(dot) {
    if (!calculator.display.includes(dot)) {
      calculator.display += dot;
    }
  }
  
  function handleOperator(nextOperator){
    const operator = calculator.operator;
    const display= calculator.display;
    const first = calculator.first;
    const inputValue = parseFloat(display);
  
    if (operator && calculator.second)  {
      calculator.operator = nextOperator;
      return;
    }
  
    if (first == null) {
      calculator.first = inputValue;
    } else if (operator) {
      const currentValue = first || 0;
      const result = performCalculation[operator](currentValue, inputValue);
  
      calculator.display = String(result);
      calculator.first = result;
    }
  
    calculator.second = true;
    calculator.operator = nextOperator;
  }
  
  const performCalculation = {
    '/': (first, secondOperand) => first / secondOperand,
  
    '*': (first, secondOperand) => first * secondOperand,
  
    '+': (first, secondOperand) => first + secondOperand,
  
    '-': (first, secondOperand) => first - secondOperand,
  
    '=': (first, secondOperand) => secondOperand
  };
  
  function resetCalculator() {
    calculator.display = '0';
    calculator.first = null;
    calculator.second = false;
    calculator.operator = null;
  }
  
  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.display;
  }
  
  updateDisplay();
  
  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', (event) => {
    const target = event.target;
    console.log(target);
    if (!target.matches('button')) {
      return;
    }
  
    if (target.classList.contains('operator')) {
      handleOperator(target.value);
          updateDisplay();
      return;
    }
  
    if (target.classList.contains('decimal')) {
      inputDecimal(target.value);
          updateDisplay();
      return;
  }
  
    if (target.classList.contains('all-clear')) {
      resetCalculator();
          updateDisplay();
      return;
    }
  
    inputDigit(target.value);
    updateDisplay();
  });