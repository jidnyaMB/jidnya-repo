import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Image from "./Image";
import "./ImageStyle.css";

function RickAndMortyApp() {
  const [term, setTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (value) => {
    setTerm(value);
    setHasSearched(true);
  };

  return (
    <div className="main">
      <div className="heading">
         <h2> The Rick & Morty</h2>
      </div>
      <h2 style={{ color: "black", textAlign: "center" }}>Welcome to the Multiverse Explorer!</h2>
      <h3 style={{ color: "black", textAlign: "center" }}>Search for your favorite Rick and Morty characters using the bar above.</h3>


      <div className="app-wrapper">
        <div>
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
    </div>
  );
}

export default RickAndMortyApp;
