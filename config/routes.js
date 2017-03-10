
const controller = require('../app/controllers');
const Joi = require('../app/joi');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: controller.UsersController.index
  },
  {
    method: 'POST',
    path: '/users',
    config: {
      validate: {
        payload: Joi.userCreate
      }
    },
    handler: controller.UsersController.create
  }
]
