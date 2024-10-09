const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const router = express.Router();
const JWT_SECRET = require('./config');
const { User } = require('../db');
const { authMiddleware } = require('./middleware');
const signupSchema = zod.object({
  username: string().email(),
  password: string(),
  firstName: string(),
  lastName: string(),
});
const signinSchema = zod.object({
  username: string().email(),
  password: string(),
});

router.post('/signup', async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(body);
  if (!success) {
    return res.json({
      message: 'Email already taken / Incorrect inputs',
    });
  }
  const user = User.findOne({
    username: body.username,
  });

  if (user._id) {
    return res.json({
      msg: 'Email already taken / Incorrect inputs',
    });
  }

  const dbUser = await User.create(body);
  const token = jwt.sign(
    {
      userId: dbUser._id,
    },
    JWT_SECRET
  );

  res.json({
    message: 'User created successfully',
    token,
  });
});

router.post('/signin', async (req, res) => {
  const body = req.body;
  const { success } = signinSchema.safeParse(body);
  if (!success) {
    return res.status(411).json({
      msg: 'Please enter correct login details',
    });
  }

  const user = await User.findOne({
    username: body.username,
    password: body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );
    res.json({
      token,
    });
    return;
  }

  res.status(411).json({
    msg: 'Error while logging in',
  });
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put('/', authMiddleware, async () => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      msg: 'Error while updating information',
    });
  }

  await User.updateOne(req.body, {
    id: req.userId,
  });

  res.josn({
    msg: 'Updated successfully',
  });
});

router.get('/bulk', async (req, res) => {
  const filter = req.query.filter || '';
  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
