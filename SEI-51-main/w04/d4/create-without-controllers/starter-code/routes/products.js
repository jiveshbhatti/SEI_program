var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
    res.send('her eis a list of products')
})

router.get('/:id', function(req,res) {
    res.send('here is prodct number ' + req.params.id)
})

router.get('/login', function(req,res) {
    res.send('this is the products login page')
})

module.exports = router;