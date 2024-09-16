const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middleware/user');

const { User } = require('../db');

// User Routes
router.post('/signup', async (req, res) => {
  // Implement user signup logic
  // const name =
  const username = req.body.username;
  const password = req.body.password;
  const userDetails = { username, password };
  const existingUser = await User.findOne(userDetails);
  if (existingUser) {
    return res.json({
      msg: 'User Already exist, use other username! 🤷‍♂️',
    });
  }
  const newUser = new User(userDetails);
  await newUser.save();
  res.status(200).json({
    msg: 'User created successfully 🥳',
  });
});

router.get('/courses', (req, res) => {
  // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
