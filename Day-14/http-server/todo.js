const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hi There!');
});

app.listen(port, () => {
  console.log(`running on port: ${port}`);
});
