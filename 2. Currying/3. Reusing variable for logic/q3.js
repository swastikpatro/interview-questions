/* 3.
    evaluate('sum')(4)(2) => 6
    evaluate('subtract')(4)(2) => 2
    evaluate('multiply')(4)(2) => 8
    evaluate('divide')(4)(2) => 2
*/

function evaluate(calcnType) {
  return function (x) {
    return function (y) {
      const calcns = {
        sum: x + y,
        multiply: x * y,
        subtract: x - y,
        divide: x / y,
      };

      return calcns[calcnType] ?? 'Invalid Operation';
    };
  };
}

// To avoid if else branchings 😅, I made calcns object;

console.log(evaluate('sum')(4)(2)); // 6
console.log(evaluate('subtract')(4)(2)); // 2
console.log(evaluate('multiply')(4)(2)); // 8
console.log(evaluate('divide')(4)(2)); // 2
console.log(evaluate('xyz')(4)(2)); // 'Invalid Operation'

// Another way
function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function curry(func /*= () => 'Invalid Operation' */) {
  return (a) => (b) => func(a, b);
}

console.log(curry(sum)(10)(2)); // 12
console.log(curry(multiply)(10)(2)); // 20
console.log(curry(divide)(10)(2)); // 5
console.log(curry(subtract)(10)(2)); // 8
