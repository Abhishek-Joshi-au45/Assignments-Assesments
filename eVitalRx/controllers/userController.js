const User = require('../models/user');

// Function to handle user login
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database by username and password
    const user = await User.findOne({ username, password });

    if (user) {
      // Successful login
      res.status(200).json({ message: 'Login successful', user });
    } else {
      // User not found or incorrect credentials
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'An error occurred during login' });
  }
};


// Function to handle user signup
const signup = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Create a new user instance
      const user = new User({ username, password });
  
      // Save the user to the database
      await user.save();
  
      // Send a response indicating success
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      // Handle errors
      res.status(500).json({ error: 'An error occurred during signup' });
    }
  };


  module.exports = { signup, login };