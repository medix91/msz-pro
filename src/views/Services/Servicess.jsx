import React from 'react';
import './Services.css'; // Assurez-vous d'importer le CSS pour cette section
import { FaLaptopCode, FaMobileAlt, FaStore, FaCogs } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-left">
        <h2 className="services-title">Services</h2>
        <p className="services-subtitle">Des solutions web et mobile sur mesure pour toutes vos entreprises. Je vous accompagnons à chaque étape pour vous offrir des résultats optimaux.</p>
   
      </div>
      
      <div className="services-right">
        <div className="service-card">
          <i className="service-icon primary"><FaLaptopCode /></i>
          <h3>Création Site Web</h3>
          <p>Je crée des sites web modernes, réactifs et adaptés à vos besoins. Je s'assure que chaque détail est pensé pour offrir la meilleure expérience utilisateur possible.</p>
        </div>
        <div className="service-card">
          <i className="service-icon primary"><FaMobileAlt /></i>
          <h3>Création d'application Mobile</h3>
          <p>Développons ensemble votre application mobile. Je vais vour fournir des solutions innovantes et performantes pour tous types de dispositifs mobiles.</p>
        </div>
        <div className="service-card">
          <i className="service-icon primary"><FaStore /></i>
          <h3>Boutique E-Commerce</h3>
          <p>Créez une boutique en ligne attrayante et fonctionnelle. Je vous aide à mettre en place des solutions e-commerce puissantes et personnalisées pour attirer plus de clients.</p>
        </div>
        <div className="service-card">
          <i className="service-icon primary"><FaCogs /></i>
          <h3>Gestion d'applications</h3>
          <p>La gestion d'applications est cruciale pour assurer la performance de vos outils. JE vous offre une gestion efficace et proactive pour garantir la stabilité de vos applications.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
