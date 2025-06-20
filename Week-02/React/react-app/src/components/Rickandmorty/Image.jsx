import React from 'react';

const Image = ({ character }) => {
  return (
    <div>
      <img src={character.image} alt={character.name} 
      style={{ width: '150px', height: '150px', borderRadius: '8px' }}
      />
      <p>{character.name}</p>
    </div>
  );
};

export default Image;
