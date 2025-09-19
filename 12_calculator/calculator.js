const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const sum = (arr) => arr.reduce( (total,sum) => total + sum ,0);

const multiply = (arr) => arr.reduce( (total,sum) => total * sum ,1);

const power = (a,b) => a ** b;


const factorial = function(a) {
	let res = 1;
  for (let i = 1; i <= a; i++) {
      res *= i;
  }
  return res;
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
