import React from 'react';

function ImageShow({ character }) {
  return (
    <div className="image-card">
      <div className="card-details">
        <h3>{character.name}</h3>
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Species:</strong> {character.species}</p>
        <p><strong>Origin:</strong> {character.origin.name}</p>
      </div>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default ImageShow;
