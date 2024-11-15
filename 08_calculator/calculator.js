const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sumArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumArray += array[i];
  }
  return sumArray;
  // return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
  // return array.reduce((product, current) => product * current)
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
