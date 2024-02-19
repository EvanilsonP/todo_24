const router = require('express').Router();
const Todo = require('../models/Todo');

// routes
router.post('/add/todo', (req, res) => {
    const { todo } = req.body;
    const newTodo = new Todo({todo});

    try {
        newTodo.save();
        console.log("Successfully added todo!");
        res.redirect('/');
    } 

    catch (error) {
        console.log(error);
    }
});

module.exports = router;