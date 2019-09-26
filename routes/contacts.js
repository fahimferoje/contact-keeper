const express = require('express');

const router = express.Router();

const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");
const Contact = require("../models/Contact");

const auth = require('../middleware/auth');

// @route GET api/contacts
// @desc GET all user contacts
//@aceess Private
router.get("/", auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({
			date: -1
		});
		res.json(contacts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
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