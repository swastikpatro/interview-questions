// 8. Bound function
//  Tell the output

function f() {
  console.log(this); // this, here is window object
}

const user = {
  g: f.bind(null), // f.bind() is basically f
};

// Here the f is called, results in consoling window object
user.g(); // window object
