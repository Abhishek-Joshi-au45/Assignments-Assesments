import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    fetch('/api/notes')
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);

  const handleAddNote = () => {
    if (newNote) {
      fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newNote }),
      })
        .then((response) => response.json())
        .then((data) => {
          setNotes([...notes, data]);
          setNewNote('');
        });
    }
  };

  const handleDeleteNote = (id) => {
    fetch(`/api/notes/${id}`, {
      method: 'DELETE',
    }).then(() => {
      const updatedNotes = notes.filter((note) => note._id !== id);
      setNotes(updatedNotes);
    });
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={handleAddNote}>Add</button>
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            {note.content}
            <button onClick={() => handleDeleteNote(note._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
