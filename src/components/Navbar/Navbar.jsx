import React, { useState } from 'react';
import './Navbar.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <nav className="navbar">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo">MSZ</div>

          {/* Links */}
          <ul className="nav-links">
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#apropos">À propos</a></li>
            <li><a href="#cv">CV</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://github.com/medix91"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mehdi-salim-zayani-906baa34a/"><FaLinkedin /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaInstagram /></a>
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={toggleMenu}>
            {isOpen ? '×' : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`sidepanel ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#accueil" onClick={toggleMenu}>Accueil</a></li>
          <li><a href="#apropos" onClick={toggleMenu}>À propos</a></li>
          <li><a href="#cv" onClick={toggleMenu}>CV</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
