const jwt = require('jsonwebtoken');
const pass = 'abcdef';

function tokenize(obj) {
  let token = jwt.sign({ obj }, pass);
  console.log('token generated: ', token);
  return token;
}

function detokenize(token) {
  try {
    const decode = jwt.decode(token);
    console.log('detokenize: ', decode);
  } catch (err) {
    console.log(err);
  }
}
function verify(token, pass) {
  try {
    const verify = jwt.verify(token, pass);
    console.log(verify);
    return verify;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

const obj1 = { name: 'Salman', class: 6 };
const obj2 = { name: 'Aman', class: 7 };
const obj3 = { name: 'Rahul', class: 8 };
const obj4 = { name: 'Asad', class: 9 };

const token1 = tokenize(obj1);
const token2 = tokenize(obj2);

// detokenize(obj1);
// detokenize(obj2);

verify(token1, 'jhgj');
// verify(token2, pass);
