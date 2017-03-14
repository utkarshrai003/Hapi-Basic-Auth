
var Joi = require('joi');

module.exports = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(6).max(12).required()
});
