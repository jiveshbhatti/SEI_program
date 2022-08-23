var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
    res.send('welcome to amazon videos. we are very rich')
})

// video-related routes
router.get('/login', function(req,res) {
    res.send('this is the login page')
})


module.exports = router;
