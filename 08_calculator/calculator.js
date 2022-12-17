const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(inputArray) {
  const sumOfArray = inputArray.reduce(
    (total, currentValue) => total + currentValue, 0
  );
  return sumOfArray;
};

const multiply = function(inputArray) {
  const productOfArray = inputArray.reduce((total, currentValue) => total * currentValue , 1
  );
  return productOfArray;
};

const power = function(num1, num2) {
  return num1 ** num2
};


const factorial = function(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  for (let i = num -1 ; i >= 1; i--) {
    num *= i;
  }
  return num;
  };


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
