
const _ = require('underscore');
var User = require('../models/users');


module.exports = {

  index: (req, reply) => {
    reply("Here Users will be displayed");
  },

  create: (req, reply) => {
    var params = req.payload;
    User.create({name: params.name, email: params.email, password: params.password})
    .then((record) => {
      console.log(record);
    });
  }
}
