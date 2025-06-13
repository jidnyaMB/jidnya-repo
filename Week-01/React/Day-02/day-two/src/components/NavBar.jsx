import React from "react";

const Navbar = () => (
  <header className="bg-blue-800 text-white p-4">
    <nav className="flex justify-between">
      <h1 className="font-bold text-lg">ReactSite</h1>
      <ul className="flex gap-4">
        {["Home", "About", "Features", "Contact"].map((link, idx) => (
          <li key={idx}><a href={`#${link.toLowerCase()}`} className="hover:underline">{link}</a></li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
