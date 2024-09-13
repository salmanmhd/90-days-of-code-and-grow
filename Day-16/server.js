const express = require('express');
const PORT = 3000;
const app = express();
app.use(express.json());

app.get('/healthCheckup', (req, res) => {
  //TODO:
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username !== 'Salman' || password !== 'pass') {
    console.log(username);
    console.log(password);

    res.status(400).json({
      msg: 'Something wrong with login',
    });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: 'Something wrong with inputs',
    });
    return;
  }

  res.status(200).json({
    msg: 'your kidney is fine',
  });
});

app.post('/healthCheckup', (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.send(`you have ${kidneyLength} kidneys`);
});

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});

// Other use cases of middleware (assignment) =
// 1. Count the number of requests
// 2. Find the average time your server is taking to handle requests
