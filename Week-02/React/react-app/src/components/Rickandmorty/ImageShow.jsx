import React from 'react';
import Image from './Image';

const ImageShow = ({ characters }) => {

  return (
    <div>
      {characters.map((char) => (
        <Image key={char.id} character={char} />
      ))}
    </div>
  );
};

export default ImageShow;
