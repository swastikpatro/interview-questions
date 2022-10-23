// 1. What is Currying?
// Example f(a,b) into f(a)(b)

function f(a) {
  return function (b) {
    console.log(`${a} ${b}`);
  };
}

console.log(f(1)(2)); // 1 2
