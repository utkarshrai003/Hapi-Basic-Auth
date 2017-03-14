
var Bcrypt = require('bcrypt');

module.exports = (password) => {
  return new Promise((fulfill, reject) =>  {
    Bcrypt.genSalt(10, (err, salt) => {
      if(err) {
        reject(err);
      }
      Bcrypt.hash(password, salt, (err, hash) => {
        if(err) {
          reject(err);
        }
        fulfill(hash);
      });
    });
  });
}
