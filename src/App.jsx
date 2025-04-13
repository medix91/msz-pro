import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import About from "./views/About/About";


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {/* Ajoute ici les sections de ton site */}
        <Home />
        <About />
        <section id="cv">CV</section>
        <section id="services">Services</section>
        <section id="contact">Contact</section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
