import React from "react";
import './ImageStyle.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">rick & morty.</div>
      <div className="navbar-right">
        <a href="#home">Home</a>
        <a href="#button">Button</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
