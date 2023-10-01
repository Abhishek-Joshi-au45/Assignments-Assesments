const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Define a route to add an item to the cart
router.post('/add-to-cart', orderController.addToCart);

// Define a route to checkout
router.post('/checkout', orderController.checkout);

// Define a route to place an order
router.post('/place-order', orderController.placeOrder);

// Define a route to view an order by ID
router.get('/order/:id', orderController.viewOrder);

module.exports = router;
