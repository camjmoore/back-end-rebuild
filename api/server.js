const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

/** SERVER */
const server = express();

/** ROUTERS */
const authRouter = require('./auth/router')
const recipesRouter = require('./recipes/router')
const categoriesRouter = require('./categories/router')
const ingredientsRouter = require('./ingredients/router')
const instructionsRouter = require('./instructions/router')

/** MIDDLEWARE */
server.use(express.json());
server.use(helmet());
server.use(cors());

/** ROUTES */
server.use('/api/auth', authRouter)
server.use('/api/recipes', recipesRouter)
// server.use('/api/categories', categoriesRouter)
// server.use('/api/ingredients', ingredientsRouter)
// server.use('/api/instructions', instructionsRouter)

/** ALPHA END-POINT */
server.get('/', (req, res) => {
// message to confirm the server is running
  res.status(200).json({ 'api': 'is runnning' })
})

module.exports = server;