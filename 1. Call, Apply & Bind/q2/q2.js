// 2. Tell the output.

const person = { name: 'Swastik' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

// Using Call
console.log(sayHi.call(person, 21)); // Swastik is 21

// Using Bind
console.log(sayHi.bind(person)(21)); // Swastik is 21
console.log(sayHi.bind(person, 21)()); // Swastik is 21
console.log(sayHi.bind(person, 21));

/*
Returns a function, if you call it(Just like line 14), output will be 'Swastik is 21'

f sayHi(age) {
  return `${this.name} is ${age}`;
}
*/

// Using Apply
console.log(sayHi.apply(person, [21])); // Swastik is 21
