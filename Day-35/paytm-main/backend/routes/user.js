const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const router = express.Router();
const JWT_SECRET = require('./config');
const { User, Account } = require('../db');
const { authMiddleware } = require('./middleware');
const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});
const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post('/signup', async (req, res) => {
  const body = req.body;
  const zodSchema = signupSchema.safeParse(body);
  // console.log(zodSchema);
  const { success } = zodSchema;
  // console.log(success);
  if (!success) {
    return res.status(400).json({
      message: 'Incorrect inputs',
    });
  }
  console.log(body.username, 'userNAME');
  const existingUser = await User.findOne({
    username: body.username,
  });
  console.log(existingUser);
  if (existingUser) {
    return res.status(409).json({
      msg: 'Email already taken',
    });
  }

  const user = await User.create({
    username: body.username,
    password: body.password,
    firstName: body.firstName,
    lastName: body.lastName,
  });
  const userId = user._id;
  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });
  const token = jwt.sign(
    {
      userId: user._id,
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
          $options: 'i', // Makes the search case-insensitive
        },
      },
      {
        lastName: {
          $regex: filter,
          $options: 'i',
        },
      },
    ],
  });

  res.json({
    users: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
