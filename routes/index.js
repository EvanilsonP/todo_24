const router = require('express').Router();


// Routes will be here
router.get('/', async (req, res) => {
    res.send('Welcome!');
});

module.exports = router