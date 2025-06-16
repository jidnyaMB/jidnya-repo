import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <NavBar />
      
      <div className="app-wrapper">
        <SideBar />
        <div className="container">
          
          <h1>Welcome to ReactSite!</h1>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default App;
