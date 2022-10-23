// What is Call, Apply and Bind ?

var obj = { name: 'Swastik' };

function sayHello(age, status) {
  return `Hello, ${this.name} is ${age} & ${status}.`;
}

console.log(sayHello(21, 'employed')); // Hello, undefined is 21 & employed.
console.log(sayHello.call(obj, 21, 'employed')); // Hello, Swastik is 21 & employed.

// Apply
// Arguments are taken inside a array for apply
console.log(sayHello.apply(obj, [21, 'employed'])); // Hello, Swastik is 21 & employed.

// Bind
//sayHello.bind(obj) returns a function which further takes arguments required for params of sayHello
console.log(sayHello.bind(obj)(21, 'employed')); // Hello, Swastik is 21 & employed.
console.log(sayHello.bind(obj, 21, 'employed')()); // Hello, Swastik is 21 & employed.

// Explanation
const bindFunc = sayHello.bind(obj);
/*
// console.log(bindFunc)

ƒ sayHello(age, status) {
  return `Hello, ${this.name} is ${age} & ${status}.`;
}
*/
console.log(bindFunc(21, 'unemployed')); // Hello, Swastik is 21 & unemployed.
