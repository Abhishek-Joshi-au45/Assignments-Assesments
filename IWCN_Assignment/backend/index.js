const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;


const { initDB } = require('./dbConfig')

//connect to DB
initDB()


// Set up middleware
app.use(bodyParser.json());


// Create the note schema
const noteSchema = new mongoose.Schema({
  title: String,
  body: String
});

// Create the note model
const Note = mongoose.model('Note', noteSchema);

// Get all notes
app.get('/notes', async (req, res) => {
  const notes = await Note.find();
  res.send(notes);
});

// Add a new note
app.post('/notes', async (req, res) => {
  const { title, body } = req.body;
  const note = new Note({ title, body });
  await note.save();
  res.send(note);
});

// Delete a note by ID
app.delete('/notes/:id', async (req, res) => {
  const { id } = req.params;
  await Note.findByIdAndDelete(id);
  res.send({ message: 'Note deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
