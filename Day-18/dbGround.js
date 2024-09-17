require('dotenv').config();
const string = process.env.MONGO_ID;
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
mongoose.connect(string);

const User = mongoose.model('Users', {
  name: String,
  profession: String,
  email: String,
  pass: String,
});

app.post('/signup', async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const profession = req.body.profession;

  const userDetails = {
    name,
    password,
    email,
    profession,
  };

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res
      .status(400)
      .send('email already registered, use a different email!');
  }

  const newUser = new User(userDetails);
  newUser.save().then(
    res.status(200).json({
      msg: "'new user added to DB'",
    })
  );
});

app.listen(3000, () => {
  console.log('running on 3000');
});
