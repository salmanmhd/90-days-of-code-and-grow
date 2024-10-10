const express = require('express');
const { default: mongoose } = require('mongoose');
const { Account } = require('../db');
const { authMiddleware } = require('./middleware');

const router = express.Router();

router.get('/balance', async (req, res) => {
  const account = await Account.findOne({
    userId: req.body.userId,
  });
  console.log(account);

  res.status(200).json({
    balance: account.balance,
  });
});

router.post('/transfer', authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  const { amount, to } = req.body;
  const account = await Account.findOne({
    userId: req.body.userId,
  }).session(session);

  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      msg: 'Insufficient balance',
    });
  }

  const toAccount = await Account.findOne({
    userId: to,
  }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      msg: 'Invalid account',
    });
  }

  await Account.updateOne(
    { userId: req.userId },
    {
      $inc: { balance: -amount },
    }
  ).session(session);
  await Account.updateOne(
    { userId: to },
    {
      $inc: { balance: amount },
    }
  ).session(session);

  await session.commitTransaction();
  res.status(200).json({
    msg: 'Transfer successful',
  });
});
module.exports = router;
