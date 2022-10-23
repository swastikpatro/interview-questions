// 7. Using Apply to enhance Built-in functions
// Find min/max number in an array

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);
console.log(max, min); // 7 2

const max2 = Math.max(...numbers);
const min2 = Math.min(...numbers);
console.log(max2, min2); // 7 2
