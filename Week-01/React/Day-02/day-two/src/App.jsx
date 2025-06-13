import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";

const App = () => {
  const isMobile = window.innerWidth < 640;

  return (
    <>
      <Navbar />
      <main className="flex flex-col md:flex-row">
        <section className="flex-1">
          <Hero />
          <Features />
        </section>
        <Sidebar showWidget={!isMobile} />
      </main>
      <Footer />
    </>
  );
};

export default App;
