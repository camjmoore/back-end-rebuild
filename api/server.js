/** SERVER */
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

/** ROUTERS */
const authRouter = require('./auth/router')
const categoriesRouter = require('./categories/router')
const ingredientsRouter = require('./ingredients/router')
const instructionsRouter = require('./instructions/router')
const recipesRouter = require('./recipes/router')


/** MIDDLEWARE */
// defaults all responses to JSON
server.use(express.json());

// first available endpoint
server.get('/', (req, res) => {
// message to confirm the server is running
  res.status(200).json({ 'api': 'is runnning' })
})

module.exports = server;