const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const router = Router();

const { Admin, Course } = require('../db');

// Admin Routes
router.post('/signup', async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const adminDetails = {
    username,
    password,
  };
  const existingUser = await Admin.findOne(adminDetails);
  if (existingUser) {
    return res.status(400).json({
      msg: 'Admin already exist',
    });
  }
  const newAdmin = new Admin(adminDetails);
  newAdmin.save().then(() => {
    res.status(200).json({
      msg: 'Admin created successfully',
    });
  });
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

// 66e86c3300b982f6a45feca3
