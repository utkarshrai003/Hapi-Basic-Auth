
const nodemailer = require('nodemailer');
const config = require('../../config');
const randomToken = require('random-token');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mr.divyanshbpl@gmail.com', // TEST ACCOUNT. WILL BE ADIDNG MAILGUN SOON
    pass: ' heritage'
  }
});

let mailOptions = (receipient_email, subject, content) => {
  return {
    from: config.fromEmail,
    to: receipient_email,
    subject: subject,
    html: content
  }
}

// Method to send forget password link mail
var sendForgetPasswordMail = (receipient) => {
  var token = randomToken(16);
  var content = "<h3>Hi " + receipient.name + "!!</h3> </br><p>Identification token for your account is : <strong>" + token + "</strong>.</p> Provide token, new_password and confirmation_password field and give a request at '/restore_password'";

  return new Promise((fulfill, reject) => {
    transporter.sendMail(mailOptions(receipient.email, "Forget Password", content), (error, info) => {
      if(error) {
        reject(false);
      }
      fulfill(token);
    });
  });
}

module.exports = {
  sendForgetPasswordMail: sendForgetPasswordMail
}
