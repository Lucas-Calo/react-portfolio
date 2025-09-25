// export default ProfileCard;
import React from "react";
import "./ProfileCard.css";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import profilePic from "../../images/lucasperfil.jpeg";

const ProfileCard = () => {
  return (
    <section id="sobre" className="profile-section">
      <div className="profile-card">
        <div className="profile-content">
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <img
                src={profilePic}
                alt="Foto de Perfil"
                className="profile-picture"
              />
            </div>
          </div>
          {/* Perfil */}
          <div className="profile-info">
            <h1 className="profile-name">Lucas Caló</h1>
            <h2 className="profile-title">Desenvolvedor Front-End React</h2>

            <div className="profile-location">
              <MapPin size={20} />
              <span>São Paulo, Brasil</span>
            </div>

            <p className="profile-description">
              Desenvolvedor Front-End apaixonado por criar experiências digitais
              incríveis e entusiasta do mundo de criptoativos. Estudante do 2º
              semestre de Análise e Desenvolvimento de Sistemas no Instituto
              INFNET, com grande interesse em iniciar minha carreira na área de
              desenvolvimento de software. Atualmente estudando Mobile-first UI
              & Fundamentos de REACT 👨🏼‍💻 ⚡️
            </p>

            {/* Links Github, Linkedin e e-mail*/}
            <div className="profile-social">
              <a
                href="https://github.com/Lucas-Calo"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-social-link"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/lucascalo1996"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-social-link"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:lucaspc.calo@gmail.com"
                className="profile-social-link"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
