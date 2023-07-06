import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchPage({ setSearchTerm }) {
  const [pokemonName, setPokemonName] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    setSearchTerm(pokemonName);
    history.push('/listing');
  };

  return (
    <div>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchPage;
