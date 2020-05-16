const express = require('express');

const server = express();

// defaults responses to JSON
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ 'api': 'is runnning' })
})

module.exports = server;