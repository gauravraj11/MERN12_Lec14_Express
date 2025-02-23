

const { log } = require('console');
const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req,res)=>{

    res.send("You are at root")

})
server.post('/:id', (req,res)=>{

    console.log(req.body);
    console.log(req.method);
    console.log(req.ip);
    console.log(req.params);
    
    const obj = req.body;

    res.send("Post req")

})




server.listen("8000", ()=>{
    console.log("server running on port no 8000");
    
})