const mongoose = require('mongoose');
const str = 'awsdkjdhfasjashdb';
mongoose.connect(str);

const User = mongoose.model('user', {
  name: String,
  email: String,
});

/// DEFINING:
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.Objectld,
      ref: 'Course',
    },
  ],
});
const CourseSchema = new mongoose.Schema({
  title: String,
  price: 5999,
});

const user = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

//  CREATE
user.create();

// FIND
user.find({
  username: 'salman',
});

user.findOne({
  username: 'Salman',
});

user.findById('id---alkdfljhdgfsahdgfdgfhgad');

// update
user.updateOne(
  {
    id: 'jsadfjkdf',
  },
  {
    password: 'newPassword',
  }
);

User.updateMany({}, { premium: true });
