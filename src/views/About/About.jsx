import React from "react";
import "./About.css";
import profilePic from "../../assets/images/medhi-profile.png"; // mets ton image ici
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaBriefcase, FaBirthdayCake, FaIdBadge } from "react-icons/fa";

const About = () => {
  return (
    <section id="apropos" className="about-section">
      <h2 className="section-title">À PROPOS</h2>

      <div className="about-content">
        {/* Left Side - Image */}
        <div className="about-image-container">
          <img src={profilePic} alt="Mehdi" className="about-image" />
        </div>

        {/* Right Side - Text + Infos */}
        <div className="about-text">
          <h3 className="about-heading">Ingénieur logiciels & Chef de projet</h3>
          <p className="about-subheading">Ingénieur et passionné par l'innovation numérique, j’allie expertise technique en React, Java, Spring, Firebase, GitHub et autres pour concevoir des solutions modernes et efficaces.</p>

          {/* Personal Info Card */}
          <div className="info-card">
            <div className="info-column">
              <div className="info-item">
                <FaUser className="info-icon" />
                <span>Mehdi Salim Zayani</span>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>Paris, France</span>
              </div>
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <span>mehdisalimzayani2@email.com</span>
              </div>
            </div>
            <div className="info-column">
              <div className="info-item">
                <FaBriefcase className="info-icon" />
                <span>Ingénieur Logiciel</span>
              </div>
              <div className="info-item">
                <FaBirthdayCake className="info-icon" />
                <span>34 ans</span>
              </div>
              <div className="info-item">
                <FaIdBadge className="info-icon" />
                <span>00 33 7 53 63 16 72</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
