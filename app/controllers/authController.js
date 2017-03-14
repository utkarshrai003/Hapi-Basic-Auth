
const models = require('../models');
const services = require('../services');

var bcrypt = require('bcrypt');

module.exports = {

  // Endpoint for signing in a user
  sign_in: (req, reply) => {
    var params = req.payload;

    // Finding a user by his email Id
    models.User.findOne({email: params.email}, (err, record) => {
      if(err || !record) {
        return reply({status: 400, error: "Email or Password is Incorrect"});
      }
      // Comparing the password
      bcrypt.compare(params.password, record.password, function(err, isMatch) {
        if(err || !isMatch) {
          return reply({status: 400, error: "Email or Password is incorrect"});
        }

        var user_data = {
          status: 200,
          data: {
            user: record,
            token: services.jwtService.issue_token(record)
          }
        }
        reply(user_data);
      });
    });
  },

  // Enpoint to Reset Password
  reset_password: (req, reply) => {
    var params = req.payload;

    // Validating if Password and Password Confirmation Matches
    if(params.new_password !== params.confirmation_password) {
      return reply({status: 400, error: "Password and Password Confirmation do not match"});
    }

    // Finding the User by ID
    models.User.findOne({_id: params._id}, (err, record) => {
      if(err || !record) {
        return reply({status: 400, error: "No such account found"});
      }

      // Validating Current Password
      bcrypt.compare(params.current_password, record.password, function(err, isMatch) {
        if(err || !isMatch) {
          return reply({status: 400, error: "Current Password is Incorrect"});
        }

        // Hash the password
        services.hashPassword(params.new_password).then((hash) => {
          // Update new Password
          models.User.update({_id: params._id}, {password: hash}, {}, (err, record) => {
            if(err) {
              return reply({status: 400, error: "Password can not be reset"});
            }
            reply({status: 200, data: record});
          });
        });
      });
    });
  },

  // Endpoint to send email for recovering password
  forget_passsword: (req, reply) => {
    var params = req.payload;

    // Finding user by email to send forget password instructions
    models.User.findOne({email: params.email}, (err, record) => {
      if(err || !record) {
        return reply({status: 400, error: "No such Account"});
      }

      // Sending mail to user with instructions
      services.mailer.sendForgetPasswordMail(record)
      .then((token) => {
        // Updating token to recognize correct user in future
        models.User.update({_id: record.id}, {forgetPassToken: token}, (err, record) => {
          if(err) {
            return reply({status: 400, error: "Token can not be uptated"});
          }
          reply({status: 200, data: {message: "Please check your mail"}});
        });
      }).catch((err) => {
          reply({status: 400, data: {message: "Forget Paswword mail can not be initiated"}});
      });
    });
  },

  recover_password: (req, reply) => {
    var params = req.payload;

    // Finding user by his Id
    models.User.findOne({_id: params._id}, (err, record) => {
      if(err || !record) {
        return reply({status: 400, error: "Account does not exists"});
      }
      // Hash the password
      services.hashPassword(params.new_password).then((hash) => {
        // Update new Password
        models.User.update({_id: record._id}, {password: hash}, {}, (err, record) => {
          if(err) {
            return reply({status: 400, error: "Password can not be reset"});
          }
          reply({status: 200, data: record});
        });
      });
    });
  }

}
