// 11. Partial Application for login function

function checkPassword(ok, fail) {
  let password = '123456';
  if (password === '549761') ok();
  else fail();
}

let user = {
  name: 'Swastik',
  login(result) {
    console.log(this.name + (result ? ', login successful' : ', login failed'));
  },
};
// checkPassword(?, ?)

checkPassword(user.login.bind(user, true), user.login.bind(user, false));
// 'Swastik, login failed'
