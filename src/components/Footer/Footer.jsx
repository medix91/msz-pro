import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-credit">© {new Date().getFullYear()} Tous droits réservés</p>

      <div className="footer-socials">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
      </div>

      <p className="footer-author">Créé par Mehdi-Salim ZAYANI</p>
    </footer>
  );
};

export default Footer;
