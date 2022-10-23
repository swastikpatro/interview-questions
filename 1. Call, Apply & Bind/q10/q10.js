// 10. Fix the line 19 to make code work properly

function checkPassword(success, failed) {
  let password = '123456';
  if (password === '573421') success();
  else failed();
}

let user = {
  name: 'Swastik',
  loginSuccessful() {
    console.log(`${this.name}, logged in`);
  },
  loginFailed() {
    console.log(`${this.name}, failed to login`);
  },
};

// checkPassword(user.loginSuccessful, user.loginFailed);
checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));
// 'Swastik, failed to login'
