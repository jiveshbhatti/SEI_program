var express = require('express');
const todoFile = require('../models/todo.js')
var router = express.Router();

router.get('/', function(req,res) {
    const todoArray = todoFile.getAll();
    res.render('todos-index.ejs',
        {todoArray: todoArray}
    )
})

// this router will handle URLS of the form
// /TODOS/6    /TODOS/1232 
router.get('/:id', function(req,res) {
    // 1. let's verify we are capturing
    //   the todoID that the user requests
    const requestId = req.params.id
    const todoItem = todoFile.getOne(requestId)

    // 3. inject that into the EJS
    res.render('todos-show.ejs', {
        todo: todoItem
    })
})


module.exports = router;