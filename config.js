
module.exports = {
  server: {
    host: '0.0.0.0',
    port: 80
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
  fromEmail: 'utkarsh.rai@codebrahma.com'
}
