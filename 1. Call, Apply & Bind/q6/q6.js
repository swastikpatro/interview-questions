// 6. Append an array to another array
// Mutate the alphaArr

const alphaArr = ['a', 'b'];
const elements = [0, 1, 2];

// Using Call
alphaArr.push.call(alphaArr, ...elements);
console.log(alphaArr);
// [ 'a', 'b', 0, 1, 2 ]

// Using Apply
const alphaArr2 = ['a', 'b'];
alphaArr.push.apply(alphaArr2, elements);
console.log(alphaArr);
// [ 'a', 'b', 0, 1, 2 ]
