const express = require('express');

const router = express.Router();



router.get('/abc', (req, res)=>{    // localhost:8000/user/abc
    res.send("get data")
})

router.post('/cde', (req, res)=>{    // localhost:8000/user/cde
    res.send("post data")
})

module.exports = router