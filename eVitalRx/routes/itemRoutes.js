const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Define a route to search for items
router.get('/search', itemController.searchItems);

// Define a route to view item details
router.get('/item/:id', itemController.viewItemDetails);

module.exports = router;
