const express = require('express');
const router = express.Router();

// router.use(express.json())
// router.use(express.urlencoded({extended:true}))

router.get('/',(req, res, next) => {
    res.send("<h1>Hello from Express</h1>")
});

module.exports = router;