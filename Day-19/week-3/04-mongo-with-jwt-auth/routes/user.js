const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middleware/user');
const { User, Course } = require('../db');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../../.env' });

const key = process.env.JWT_PASS;

// User Routes
router.post('/signup', async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  const isExist = await User.findOne({ username });
  if (isExist) {
    return res.json({
      msg: 'User already exist',
    });
  }
  try {
    const user = await User.create({ username, password });
    res.status(200).json({
      msg: 'Signup successfull',
    });
  } catch (error) {
    res.json({ error });
  }
});

router.post('/signin', async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({ username });
  if (user && user.password === password) {
    const token = await jwt.sign({ username, password }, key);
    res.json({
      token,
    });
  } else {
    res.status(401).json({
      msg: 'Wrong username or password',
    });
  }
});

router.get('/courses', async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.json({
    courses: courses,
  });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const courseId = req.params.courseId;

  const isCourseAvailable = await Course.findById(courseId);
  if (!isCourseAvailable) {
    return res.status(404).json({ msg: 'Course not found' });
  }
  try {
    await User.updateOne(
      {
        username,
      },
      {
        $push: {
          purchasedCourse: courseId,
        },
      }
    );
    res.status(200).json({
      msg: 'Purchase successful',
    });
  } catch (error) {
    res.json({ error });
  }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.username;
  const userData = await User.findOne({ username });
  const purchasedCourses = await Course.find({
    _id: { $in: userData.purchasedCourse },
  });

  res.json({
    purchasedCourses: purchasedCourses,
  });
});

module.exports = router;
