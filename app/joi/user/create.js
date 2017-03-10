
var Joi = require('joi');

module.exports = Joi.object().keys({
  name: Joi.string().required().min(6).max(12),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(6).max(10).required()
});
