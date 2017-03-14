
const models = require('../models');
const services = require('../services');

module.exports = {

  index: (req, reply) => {
    models.User.find({}, (err, record) => {
      if(err) {
        return reply({status: 400, error: err});
      }
      reply(record);
    });
  },

  create: (req, reply) => {
    var params = req.payload;

    services.hashPassword(params.password)
    .then((hash) => {
      models.User.create({
        name: params.name,
        email: params.email,
        password: hash
      },
      (err, record) => {
        if(err) {
          return reply({status: 400, error: err});
        }
        reply({status: 200, data: record});
      });
    })
    .catch((err) => {
      reply({status: 500, error: err.message});
    });
  }
}
