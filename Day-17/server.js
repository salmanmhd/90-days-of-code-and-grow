const express = require('express');
const app = express();
app.use(express.json());
const zod = require('zod');
app.get('/', (req, res) => {
  const email = zod.string().email().safeParse(req.body.email);
  const pass = zod.string().safeParse(req.body.pass);
  const array = zod.array(zod.number()).safeParse(req.body.array);
  if (!email.success || !pass.success || !array.success) {
    res.send('wrong input type');
    return;
  }
  if (email.data !== 'salman@gmail.com' || pass.data !== '1234') {
    res.send('wrong id pass!');
    return;
  }

  res.json({
    array,
    email,
    pass,
  });
});

app.use((err, req, res, next) => {
  res.status(400).send('there is some error');
});

app.listen(3000, () => {
  console.log(`running on port ${3000}`);
});
