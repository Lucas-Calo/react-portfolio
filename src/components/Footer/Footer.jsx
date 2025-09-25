import React from "react";
import "./Footer.css";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Lucas Caló. Todos os direitos reservados.
        </p>
        <div className="footer-social">
          <a
            href="https://github.com/Lucas-Calo"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/lucascalo1996"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
