
//Our imports and Express Server Declaration 
const express = require('express');
const server = express();
server.use(express.json());
//Our 1st Get request to the route '/'
server.get('/', (req, res) => {
  res.send("Testing Puppy Adoption Server!!!!!!")
});
//Port Definition and Server Listener
const port = process.env.PORT || 5000;
server.listen(port, ()=> console.log(`\n Running on port ${port}\n`))