const mongoose = require('mongoose');
require('dotenv').config({ path: '../../.env' });

const str = process.env.MONGODB_URI;
mongoose.connect(str);

const todoSchemaDb = mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false },
});

const todo = mongoose.model('todos', todoSchemaDb);

module.exports = {
  todo,
};
