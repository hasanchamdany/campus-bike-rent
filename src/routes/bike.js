const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Bike Routes test endpoint")
})

//Create


module.exports = router