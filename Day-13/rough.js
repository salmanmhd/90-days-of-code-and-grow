function timeOut1() {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve('This is the data');
    }, 1000);
  });

  return p;
}

async function promisify() {
  const data = await timeOut1();
  console.log(data);
}

promisify();
