
module.exports = {
  server: {
    host: '0.0.0.0',
    port: 8000
  },
  database: {
    host: '127.0.0.1',
    port: 27017,
    db: 'HapiTest',
    username: '',
    password: ''
  },
  jwt: {
    secretKey: 'secretissecret',
    tokenExpiryDuration: 100 * 60 * 60 // 100 hours
  },
  forgetPassLink: '/recover_password',
  fromEmail: 'utkarsh.rai@codebrahma.com',
  mailGun: {
    apiKey: 'key-ff69b55ce63b8990022c039dec2c4b59'
  }
}
