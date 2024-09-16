const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middleware/user');

const { User, Course } = require('../db');

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

router.get('/courses', async (req, res) => {
  // Implement listing all courses logic
  try {
    const allCourses = await Course.find({});
    res.status(200).json({ courses: allCourses });
  } catch (error) {
    res.status(400).json({
      msg: 'something went wrong',
    });
  }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  const password = req.headers.password;

  const isCourseAvailable = await Course.findById(courseId);
  if (!isCourseAvailable) {
    return res.status(404).json({
      msg: 'Wrong course id, course not found!!',
    });
  }
  try {
    await User.updateOne(
      {
        username,
        password,
      },
      {
        $push: {
          purchasedCourse: courseId,
        },
      }
    );
    return res.json({
      msg: 'Purchase successful',
    });
  } catch (error) {
    res.json({ msg: error });
  }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const password = req.headers.password;

  const userData = await User.findOne({ username, password });
  const purchasedCourses = await Course.find({
    _id: { $in: userData.purchasedCourse },
  });
  res.json({
    purchasedCourses: purchasedCourses,
  });
});

module.exports = router;
