const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// const config = require('./config');
const config = require('./Config')
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(cors());
app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
