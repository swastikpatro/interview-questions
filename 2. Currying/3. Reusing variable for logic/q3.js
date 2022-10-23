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
console.log(evaluate('xyz')(4)(2)); // 2
