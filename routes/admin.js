const express = require("express");
const router = express.Router();

router.get('/admin', (req,res) => {
    res.send("hello");
})

module.exports = router;