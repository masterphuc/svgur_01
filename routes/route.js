const express = require('express');
const router = express.Router();

router.get('/contacts', (req, res, next)=>{
    res.send('retrieving contacts');
});

module.exports = router;