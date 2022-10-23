function sum(x) {
  if (x === undefined) return 0;
  x = Number(x);
  return function (y) {
    if (y === undefined) {
      return x;
    } else {
      return sum(x + Number(y));
    }
  };
}

function sum2(x) {
  if (x === undefined) return 0;
  x = Number(x);

  return function (y) {
    return y === undefined ? x : sum2(x + Number(y));
  };
}

console.log(sum(1)(2)(10)()); // 13
console.log(sum('1')(2)('10')()); // 13
console.log(sum()); // 0

console.log(sum2(1)(2)(10)()); // 13
console.log(sum2('1')(2)('10')()); // 13
console.log(sum2()); // 0
