// 3. Call With function inside object

const age = 5; // Now window object has a property window.age which points to value 10,
// const age = 10;

const person = {
  name: 'Swastik',
  age: 20,
  getAge() {
    console.log(this);
    return this.age;
  },
};

var person2 = { age: 24 };

console.log(person.getAge()); // 20
console.log(person.getAge.call(person2)); // 24

// Points to window Object
// only if the age variable is defined using var
console.log(person.getAge.call()); // 10 //Points to window object
console.log(person.getAge.call(this)); // 10 //Points to window object
console.log(person.getAge.call(window)); // 10 //Points to window object

// Using Apply
console.log(person.getAge.apply(person2)); // 24
// Using Bind
console.log(person.getAge.bind(person2)()); // 24
