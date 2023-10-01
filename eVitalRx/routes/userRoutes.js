const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define a route for user signup
router.post('/signup', userController.signup);

// Define a route for user login
router.post('/login', userController.login);

module.exports = router;
