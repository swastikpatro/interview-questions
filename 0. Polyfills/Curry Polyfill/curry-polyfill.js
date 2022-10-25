// Curry Implementation
// Converts f(a,b,c,d) into f(a)(b)(c)(d)

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...next, ...args);
      };
    }
  };
}

function sum(a, b, c, d) {
  return a + b + c + d;
}

const totalSum = curry(sum);
console.log(totalSum(10, 12, 13, 14));
// console.log(curry(sum)(10, 12, 13));
