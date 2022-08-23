var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/page', function(req,res) {
  res.send('page')
})

router.get('/elda', function(req,res) {
  res.send('this is the elda route')
})

module.exports = router;
