// const path = require('path');
// console.log('Current directory:', __dirname);
// const directoryPath = path.join(__dirname, 'your-directory');
// console.log('Resolved directory path:', directoryPath);

function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`one`);
      resolve('one');
    }, 1000);
  });
}

function wait1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`two`);
      //   reject('two rejected');
      resolve('two');
    }, 3000);
  });
}

function wait2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`three`);
      //   reject();
      resolve('three');
    }, 2000);
  });
}

async function print() {
  const start = Date.now();
  try {
    const p = await Promise.all([wait(), wait1(), wait2()]);
    console.log(p); // Only logs if all promises are resolved successfully
  } catch (error) {
    console.error('A promise was rejected:', error); // Handle the rejection here
  }

  const end = Date.now();
  console.log('inside print');
  console.log(`${end - start}`);
}
// print();

function print1() {
  const start = Date.now();
  wait()
    .then(() => wait1())
    .then(() => wait2())
    .then(() => {
      console.log('after all the promises call');
      console.log(`time: ${Date.now() - start}`);
    });
}
print1();
