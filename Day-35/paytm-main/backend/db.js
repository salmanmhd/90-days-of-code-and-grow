const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

const mongoURI = process.env.MONGO_ID;
mongoose.connect(mongoURI);

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);
module.exports = {
  User,
  Account,
};
