
//Our imports and Express Server Declaration 
const express = require('express');
const visitorRoutes = require('./routes/visitors-routes.js')
const adminRoutes = require('./routes/admin-routes.js')
const server = express();
server.use(express.json());
server.use("/api/visitors", visitorRoutes)
server.use("/api/admin", adminRoutes)
//Our 1st Get request to the route '/'
server.get('/', (req, res) => {
  res.send("Testing Puppy Adoption Server!!!!!!")
});
//Port Definition and Server Listener
const port = process.env.PORT || 5000;
server.listen(port, ()=> console.log(`\n Running on port ${port}\n`))