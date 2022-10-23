const myName = {
  firstName: 'Swastik',
  lastName: 'Patro',
};

function greetMsg(msg, questionMsg) {
  return `${msg}, ${this.firstName} ${this.lastName}, ${questionMsg}`;
}

// Polyfill here
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + 'cannot be bound & is not callable');
  }

  const contextClone = deepClone(context);
  contextClone.fn = this;

  return function (...args2) {
    return contextClone.fn(...args, ...args2);
    /*
    if(args.length>0) {
      return contextClone.fn(...args)
    } else {
      return contextClone.fn(...args2)
    }
    */
  };
};

// Explanation
/*
 * I created a clone of the context object, will add a method fn to that clone object (contextClone)
 * now the polyfill will return a function, when invoked with arguments, it'll return whatever the fn method returned.
 */

/* Output */
// args is shown and args2 is ignored if both are passed

console.log(
  greetMsg.bind(
    myName,
    'Hii',
    'nothing such'
  )('Good Morning', 'had your breakfast?')
);
// Hii, Swastik Patro, nothing such
console.log(
  greetMsg.myBind(
    myName,
    'Hii',
    'nothing such'
  )('Good Morning', 'had your breakfast?')
);
// Hii, Swastik Patro, nothing such

console.log(greetMsg.bind(myName)('Good Morning', 'had your breakfast?'));
// 'Good Morning, Swastik Patro, had your breakfast?'
console.log(greetMsg.bind(myName, 'Good Morning', 'had your breakfast?')());
// 'Good Morning, Swastik Patro, had your breakfast?'

console.log(greetMsg.myBind(myName)('Good Morning', 'had your breakfast?'));
// 'Good Morning, Swastik Patro, had your breakfast?'
console.log(greetMsg.myBind(myName, 'Good Morning', 'had your breakfast?')());
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
