import React from "react";


export default function Layout({ children }) {
  return (
    
    <div>
        <h1>Product Showcase</h1>
      <header className="header">
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p>© 2025 My Store</p>
      </footer>
    </div>
  )
}
