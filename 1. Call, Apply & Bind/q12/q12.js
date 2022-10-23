// 12.  Explicit Binding with Arrow Function

const age = 10;
// var age = 10; //window object will have a age property with value 10, when defined with var.

var person = {
  name: 'Swastik',
  age: 20,
  getArrowAge: () => console.log(this.age), //try changing to 'this'
  getAge: function () {
    console.log(this.age);
  },
};

var person2 = { age: 24 };

person.getArrowAge(); // 'this', inside arrow methods, points to window object
person.getAge.call(person2); // 24
person.getArrowAge.call(person2); // window object // undefined
