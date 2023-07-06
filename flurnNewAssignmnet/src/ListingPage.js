import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListingPage({ searchTerm }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // Make API call to fetch pokemons based on searchTerm
    // Update the 'pokemons' state with the fetched data
  }, [searchTerm]);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <Link to={`/details/${pokemon.id}`} key={pokemon.id}>
          <img src={pokemon.imageUrl} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default ListingPage;
