import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleClick = () => {
    onSearch(input);
  };

  return (
    <div>
        <label>Please enter a character to view images!</label><br/><br/>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search character"
      /> <br/> <br/>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;
