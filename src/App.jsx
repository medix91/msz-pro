import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./views/Contact/Contact";
import CV from "./views/CV/Cv";
import Services from "./views/Services/Servicess";


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {/* Ajoute ici les sections de ton site */}
        <Home />
        <About />
        <Skills />
        <CV />
        <Services />
       <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
