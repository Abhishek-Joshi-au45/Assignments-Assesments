// Require the necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongodb');

// Initialize the app and set the port
const app = express();
const port = process.env.PORT || 5000;

// Configure the middleware
app.use(bodyParser.json());
app.use(cors());

// Set up the database connection
const uri = '<YOUR_MONGODB_URI>';
const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let collection;

// Connect to the database
client.connect(err => {
  collection = client.db(MyDATABASE).collection(patient);
  console.log('Connected to the database');
});

// Define the routes
app.get('/api/patients', (req, res) => {
  collection.find({}).toArray((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/patients', (req, res) => {
  const newPatient = req.body;
  collection.insertOne(newPatient, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

app.put('/api/patients/:id', (req, res) => {
  const id = req.params.id;
  const updatedPatient = req.body;
  collection.updateOne({ _id: mongodb.ObjectId(id) }, { $set: updatedPatient }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

app.delete('/api/patients/:id', (req, res) => {
  const id = req.params.id;
  collection.deleteOne({ _id: mongodb.ObjectId(id) }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
