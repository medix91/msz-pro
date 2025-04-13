import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Mehdi Salim Zayani - Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
