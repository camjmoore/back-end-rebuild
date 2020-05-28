const express = require('express');

const server = express();

// defaults all responses to JSON
server.use(express.json());

// first available endpoint
server.get('/', (req, res) => {
// message to confirm the server is running
  res.status(200).json({ 'api': 'is runnning' })
})

module.exports = server;