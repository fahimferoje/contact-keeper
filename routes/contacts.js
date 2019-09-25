const express = require('express');

const router = express.Router();

// @route GET api/contacts
// @desc GET all user contacts
//@aceess Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

// @route POST api/contacts
// @desc Add new contact
//@aceess Private
router.post('/', (req, res) => {
    res.send('Add contact');
});

// @route PUT api/contacts/:id
// @desc Update contact
//@aceess Private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

// @route DELETE api/contacts/:id
// @desc DELETE contact
//@aceess Private
router.delete('/:id', (req, res) => {
    res.send('delete contact');
});

module.exports = router;