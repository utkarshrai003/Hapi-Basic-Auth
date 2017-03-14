
var user_routes = require('./users');
var auth_routes = require('./auth');

module.exports = [].concat(
  user_routes,
  auth_routes
);
