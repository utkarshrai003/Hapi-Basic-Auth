
var Joi = require('joi');

module.exports = Joi.object().keys({
  _id: Joi.string(),
  token: Joi.string().alphanum().required(),
  new_password: Joi.string().alphanum().min(6).max(12).required(),
  confirmation_password: Joi.any().valid(Joi.ref('new_password')).required()
});
