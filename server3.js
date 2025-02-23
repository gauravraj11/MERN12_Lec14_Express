const { log } = require('console');
const express = require('express');
const server = express();

function func1(req, res, next){
    console.log("gaurav");
    next();
}

// server.use(func1());

// server.use((req, res, next)=>{
 
//     const user = false;
//     if(user){
//         console.log('Time:', Date.now());
//         next();
//     }else{
//         res.send("please login")
//     }
  
// })
server.get('/', (req,res)=>{

    res.send("You are at root")

})
server.post('/',func1, (req,res)=>{

    res.send("Post req")

})




server.listen("8000", ()=>{
    console.log("server running on port no 8000");
    
})