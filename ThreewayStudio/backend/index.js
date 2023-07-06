const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const formRoutes = require('./routes/forms');
const userRoutes = require('./routes/users');


const app = express();
const PORT = 3000;


const { initDB } = require('./dbConfig')

//connect to DB
initDB()


// Set up middleware
app.use(bodyParser.json());


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/books', formRoutes);
app.use('/users', userRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
