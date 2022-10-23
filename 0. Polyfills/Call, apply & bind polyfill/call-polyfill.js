const myName = {
  firstName: 'Swastik',
  lastName: 'Patro',
};

function greetMsg(msg, questionMsg) {
  return `${msg}, ${this.firstName} ${this.lastName}, ${questionMsg}`;
}

// Polyfill here
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + ' Its not callable');
  }

  const contextClone = deepClone(context);
  contextClone.fn = this;
  return contextClone.fn(...args);
};

/* Output */
console.log(greetMsg.call(myName, 'Good Morning', 'had your breakfast?'));
// 'Good Morning, Swastik Patro, had your breakfast?'
console.log(greetMsg.myCall(myName, 'Good Morning', 'had your breakfast?'));
// 'Good Morning, Swastik Patro, had your breakfast?'

/* deepClone function */
function deepClone(input) {
  const result = Array.isArray(input) ? [] : {};

  if (typeof input !== 'object') {
    return input;
  }

  for (key in input) {
    result[key] = deepClone(input[key]);
  }

  return result;
}
