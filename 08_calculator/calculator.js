const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(inputArray) {
	initiaValue = 0;
  const sumOfArray = inputArray.reduce(
    (total, currentValue) => total + currentValue, initiaValue 
  );
  return sumOfArray;

};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
