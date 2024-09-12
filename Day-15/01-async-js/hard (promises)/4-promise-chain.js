/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return p;
}

function wait2(t) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return p;
}

function wait3(t) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
  return p;
}

function timer(t1, t2, t3) {
  const startTime = Date.now();

  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
      const endTime = Date.now();
      return endTime - startTime;
    });
}

function calculateTime(t1, t2, t3) {
  return timer(t1, t2, t3);
}

module.exports = calculateTime;
