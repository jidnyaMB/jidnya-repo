import React, { useEffect, useState } from 'react';
import getCharacters from './api';
import ImageShow from './ImageShow';
import './ImageStyle.css';

function Image({ term }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (term) {
      getCharacters(term).then(setResults);
    }
  }, [term]);

  return (
    <div className="grid-container">
      {results.map((character) => (
        <ImageShow key={character.id} character={character} />
      ))}
    </div>
  );
}

export default Image;
