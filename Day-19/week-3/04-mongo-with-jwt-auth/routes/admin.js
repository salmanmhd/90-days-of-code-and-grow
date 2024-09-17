const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const { User, Admin, Course } = require('../db');
const router = Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');

const key = process.env.JWT_PASS;
// Admin Routes
router.post('/signup', async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const user = { username, password };
  const isExist = await Admin.findOne({ username });
  if (isExist) {
    return res.json({ msg: 'User already exist' });
  } else {
    await Admin.create({ username, password });

    res.status(200).json({ msg: 'Admin created 🥳' });
  }
});

router.post('/signin', async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const admin = await Admin.findOne({ username });

  // If admin is found, check the password
  if (admin && admin.password === password) {
    const token = await jwt.sign({ username, password }, key);
    res.json({
      token,
    });
  } else {
    res.status(401).json({ msg: 'wrong username or password' });
  }
});

router.post('/courses', adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });
  console.log(newCourse);
  res.status(200).json({
    msg: 'Course created successfully 🥳',
  });
});

router.get('/courses', adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find();
  res.json({ courses: courses });
});

module.exports = router;
