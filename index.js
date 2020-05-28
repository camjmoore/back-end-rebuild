require("dotenv").config();

// import server 
const server = require("./api/server.js");

// if the port is not specified an .env, set it to 5000
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** server is up on https://localhost:${port}`))