import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-credit">© {new Date().getFullYear()} Tous droits réservés</p>

      <div className="footer-socials">
        <a href="https://github.com/medix91" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mehdi-salim-zayani-906baa34a/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaWhatsapp />
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
