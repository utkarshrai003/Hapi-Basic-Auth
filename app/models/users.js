
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
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
  }
});

var User = mongoose.model('User', UserSchema);

module.exports = {
  User: User
}
