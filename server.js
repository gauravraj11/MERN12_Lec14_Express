const { log } = require('console');
const express = require('express');
const user = require('./userController');
const server = express();

server.use(express.json());


//API end points

server.use('/user', user )
// server.use('/product', product )


server.listen("8000", ()=>{
    console.log("server running on port no 8000");
    
})