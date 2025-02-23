const express = require('express');
const server = express();


server.get('/', (req,res)=>{

    res.send("You are at root")

})
server.get('/user', (req,res)=>{

    res.send("You are one of the user")

})
server.get('/product', (req,res)=>{

    res.send("These r the products")

})

server.post('/', (req, res)=>{

    
    res.send("values received");
})

server.patch('/', (req,res)=>{

    res.send("We updated ur data")

})

server.delete('/', (req,res)=>{

    res.send("Deleted ur data")

})






server.listen("8000", ()=>{
    console.log("server running on port no 8000");
    
})