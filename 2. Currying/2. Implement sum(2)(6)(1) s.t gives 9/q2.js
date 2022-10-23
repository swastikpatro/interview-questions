// 2. Implement this sum(2)(6)(1) so the output is 9

const sum2 = (a) => (b) => (c) => a + b + c;

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

function sum3(a) {
  return function (b) {
    return function (c) {
      [a, b, c] = [Number(a), Number(b), Number(c)];
      return a + b + c;
    };
  };
}

function sum4(a, b, c) {
  return a + b + c;
}

console.log(sum4(2, 6, 1)); // 9
console.log(sum(2)(6)(1)); // 9
console.log(sum3('2')('6')('1')); // 9
