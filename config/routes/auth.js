
var base = require('./base');

module.exports = [
  {
    method: 'POST',
    path: '/sign_in',
    config: {
      validate: {
        payload: base.joi.userSignIn
      }
    },
    handler: base.controller.authController.sign_in
  },
  {
    method: 'POST',
    path: '/reset_password',
    config: {
      validate: {
        payload: base.joi.userResetPassword
      }
    },
    handler: base.controller.authController.reset_password
  },
  {
    method: 'POST',
    path: '/forget_password',
    config: {
      validate: {
        payload: base.joi.userForgetPassword
      }
    },
    handler: base.controller.authController.forget_passsword
  },
  {
    method: 'POST',
    path: '/recover_password',
    config: {
      validate: {
        payload: base.joi.userRecoverPassword
      }
    },
    handler: base.controller.authController.recover_password
  }
]
