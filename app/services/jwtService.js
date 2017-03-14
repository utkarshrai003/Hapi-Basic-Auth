
var JWT = require('jsonwebtoken');
var  config = require('../../config');

var issue_token = (payload) => {
  return JWT.sign({
    data: payload,
    exp: Math.floor(Date.now() / 1000) + config.jwt.tokenExpiryDuration
  }, config.jwt.secretKey);
}

var verify_token = (token) => {
  return JWT.verify(
    token,
    config.jwt.secretKey
  );
}

module.exports = {
  issue_token: issue_token,
  verify_token: verify_token
};
