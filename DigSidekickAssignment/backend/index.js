const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const jwt = require('jsonwebtoken');


const app = express();
const PORT = 3000;


const { initDB } = require('./dbConfig')

//connect to DB
initDB()


// Set up middleware
app.use(bodyParser.json());

// Secret key for JWT
const secretKey = 'your-secret-key';

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Routes
app.use('/users', userRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
