import React from "react";
import "./Home.css";
import illustration from "../../assets/images/illustration.svg";

function Home() {
  return (
    <section id="accueil" className="home-section">
      <div className="home-left">
        <h1 className="home-title">Concevoir l'Avenir Numérique avec Excellence</h1>
        <p className="home-subtitle">Mon travail consiste à allier créativité et technologie pour des solutions élégantes, performantes et sécurisées.</p>
        <div className="home-buttons">
          <a href="#contact" className="btn btn-filled">Me contacter</a>
          <a href="#apropos" className="btn btn-outline">En savoir plus</a>

        </div>
      </div>
      <div className="home-right">
        <img src={illustration} alt="illustration" className="home-image" />
      </div>
    </section>
  );
}

export default Home;
