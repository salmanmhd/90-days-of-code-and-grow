/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      //   resolve(`Promise resolved after ${n} seconds `);
    }, n * 1000);
  });
  return p;
}

module.exports = wait;
