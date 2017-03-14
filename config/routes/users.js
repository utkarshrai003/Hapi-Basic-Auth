
var base = require('./base');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: base.controller.usersController.index
  },
  {
    method: 'POST',
    path: '/users',
    config: {
      validate: {
        payload: base.joi.userCreate
      }
    },
    handler: base.controller.usersController.create
  }
]
