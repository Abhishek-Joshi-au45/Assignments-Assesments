import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchAllNotes = async () => {
      try {
        const res = await axios.get("http://localhost:8800/notes");
        setNotes(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllNotes();
  }, []);

  console.log(notes);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/notes/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Notes</h1>
      <div className="books">
        {notes.map((note) => (
          <div key={note.id} className="book">
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <button className="delete" onClick={() => handleDelete(note.id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${note.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new Note
        </Link>
      </button>
    </div>
  );
};

export default Books;