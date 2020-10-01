const jwt = require("jsonwebtoken");

const secret = require("../secret-config/secretConfig.js");

module.exports = {
  generateToken,
};

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.user_name,
  };

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, secret.jwtSecret, options);
}
