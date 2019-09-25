const express = require('express');

const router = express.Router();

// @route POST api/users
// @desc Register a user
//@aceess Public
router.post('/', (req, res) => {
    res.send('Registering a user');
});

module.exports = router;