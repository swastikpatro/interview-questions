// 5. Currying Vs Partial Application

// The number of nested functions a currying function have, depends on the number of arguments accepted.
// Partial Application transforms a function into another function with small attrities(no of arguments a function receives)

// Partial Application // 2 functions with 3 arguments
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

// Currying // 3 functions with 3 arguments
function sum2(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(5)(2, 9)); // 16
console.log(sum2(5)(2)(9)); // 16
