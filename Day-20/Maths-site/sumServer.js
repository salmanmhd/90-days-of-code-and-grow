const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const sum = a + b;

  res.status(200).send(sum.toString());
});

app.get('/interes', (req, res) => {
  const p = Number(req.query.p);
  const r = Number(req.query.r);
  const t = Number(req.query.t);

  const interest = (p * r * t) / 100;
  const totalAmount = p + interest;
  res.status(200).json({
    interest,
    total: totalAmount,
  });
});

app.listen(3000, () => {
  console.log(`running on 3000`);
});

// localhost:3000/sum?a=10&b=50
