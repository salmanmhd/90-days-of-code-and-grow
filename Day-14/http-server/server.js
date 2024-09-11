const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/sum', (req, res) => {
  const n = req.query.n;
  const ans = sumTillN(n);
  res.send(ans.toString());
});

app.listen(port, () => {
  console.log('Your host is running');
});

function sumTillN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`Sum from 1 to ${n} is: ${sum}`);
  return sum;
}
