// 9. Bind Chaining
// Tell the output

function f() {
  console.log(this.name);
}

f = f.bind({ name: 'John' }).bind({ name: 'Swastik' });
// there is no such thing called bind chaining, only the first time bind happens resulting the output as 'John'
//  if a function is bound, it cannot be rebound.

f();

// 'John'
