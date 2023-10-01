const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const initDB = require('./dbConfig')

// Setup middleware
app.use(bodyParser.json());
app.use(express.json())

// Connect to MongoDB
// mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });

require('dotenv').config() //load all key-value pairs in .env file to proces.env object

//connect to DB
initDB()

// Load routes
app.use('/users', require('./routes/userRoutes'));
app.use('/items', require('./routes/itemRoutes'));
app.use('/orders', require('./routes/orderRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
