const Order = require('../models/order');

// Function to add an item to the cart
const addToCart = async (req, res) => {
  // Extract item details from the request
  const { itemId, quantity } = req.body;

  try {
    // Assume we have a user associated with the request
    const userId = req.user.id;

    // Create a new order or update an existing one (based on your logic)
    let order = await Order.findOne({ userId });

    if (!order) {
      order = new Order({ userId, items: [] });
    }

    // Add the item to the order's items list
    order.items.push({ itemId, quantity });
    await order.save();

    res.status(200).json({ message: 'Item added to cart successfully', order });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'An error occurred while adding item to cart' });
  }
};

// Function to place an order
const placeOrder = async (req, res) => {
  // Assume we have a user associated with the request
  const userId = req.user.id;

  try {
    // Find the cart for the user
    const order = await Order.findOne({ userId });

    if (!order || order.items.length === 0) {
      return res.status(400).json({ error: 'No items in the cart to place an order' });
    }

    // Create a new order based on the cart
    const newOrder = new Order({ userId, items: order.items });

    // Save the new order
    await newOrder.save();

    // Clear the cart (optional, based on your business logic)
    await order.remove();

    res.status(200).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'An error occurred while placing the order' });
  }
};

// Function to view an order by ID
const viewOrder = async (req, res) => {
  const orderId = req.params.id;

  try {
    // Find the order by its ID
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json({ order });
  } catch (error) {
    console.error('Error viewing order:', error);
    res.status(500).json({ error: 'An error occurred while viewing the order' });
  }
};

module.exports = { addToCart, placeOrder, viewOrder };
