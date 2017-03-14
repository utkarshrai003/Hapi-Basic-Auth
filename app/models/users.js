
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  forgetPassToken: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);
