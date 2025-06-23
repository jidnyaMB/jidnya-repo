import React from 'react';

function ImageShow({ character }) {
  return (
    <div className="image-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Origin:</strong> {character.origin.name}</p>
    </div>
  );
}

export default ImageShow;
