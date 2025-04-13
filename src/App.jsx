import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {/* Ajoute ici les sections de ton site */}
        <section id="accueil">Accueil</section>
        <section id="apropos">À propos</section>
        <section id="cv">CV</section>
        <section id="services">Services</section>
        <section id="contact">Contact</section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
