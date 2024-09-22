const mongoose = require('mongoose');
require('dotenv').config({ path: '../../.env' });
const str = process.env.MONGODB_URI;
console.log(str);
mongoose.connect(str);

const todoSchemaDb = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model('todos', todoSchemaDb);

module.exports = {
  todo,
};
