// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3001;

const { initDB } = require('./dbConfig')

 //connect to DB
initDB()

// // Connect to MongoDB (replace 'your_connection_string' with your actual MongoDB connection string)
// mongoose.connect('your_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());

// Create a Note schema and model using Mongoose
const noteSchema = new mongoose.Schema({
  content: String,
});

const Note = mongoose.model('Note', noteSchema);

// API routes
app.get('/api/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.post('/api/notes', async (req, res) => {
  const { content } = req.body;
  const newNote = new Note({ content });
  await newNote.save();
  res.status(201).json(newNote);
});

app.delete('/api/notes/:id', async (req, res) => {
  const { id } = req.params;
  await Note.findByIdAndDelete(id);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





