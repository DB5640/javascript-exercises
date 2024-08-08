const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(num) {
return num.reduce((total, act)=> total * act, 1)
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
	return num > 1 ? num * factorial(num-1) : 1
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
