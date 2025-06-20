import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ImageShow from './ImageShow';
import { fetchCharactersByName } from './api';

const RickAndMortyApp = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (name) => {
    try {
      const data = await fetchCharactersByName(name);
      setCharacters(data);
      setError('');
    } catch (err) {
      setCharacters([]);
      setError(err.message);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      <ImageShow characters={characters} />
    </div>
  );
};

export default RickAndMortyApp;
