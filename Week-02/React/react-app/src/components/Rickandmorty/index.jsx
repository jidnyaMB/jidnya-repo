import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Image from './Image';
import './ImageStyle.css';

function RickAndMortyApp() {
  const [term, setTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (value) => {
    setTerm(value);
    setHasSearched(true);
  };

  return (
    <div className="app-wrapper">
    <div >
      <div className="search-wrapper">
        <SearchBar onSubmit={handleSearch} />
      </div>

      {hasSearched && (
        <div className="image-results">
          <Image term={term} />
        </div>
      )}
    </div>
    </div>
  );
}

export default RickAndMortyApp;
