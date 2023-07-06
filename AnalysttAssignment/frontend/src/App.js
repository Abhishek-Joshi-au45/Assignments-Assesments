// src/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('/books');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log('Failed to fetch books:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`/books/search?query=${searchQuery}`);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log('Failed to search books:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
