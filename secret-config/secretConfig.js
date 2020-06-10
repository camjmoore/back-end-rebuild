/** This file allows a placeholder value for the secret to be set if/when the env file gets deleted, until then we will set it to the env file value*/

module.exports = {
  jwtSecret: process.env.JWT_SECRET
}
