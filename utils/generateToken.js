const jwt = require('jsonwebtoken');

const secret = require('../config/secrets');

module.exports = {
  generateToken
}

const generateToken = (user) => {
  const payload = {
    subject: user.id,
    username: user.username
  }

  const options = {
    expires: '1 day'
  }

  return jwt.sign(payload, secrets.jwtSecret, options)
}