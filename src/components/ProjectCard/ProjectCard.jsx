import React from "react";
import "./ProjectCard.css";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({ imageUrl, title, projectUrl }) => {
  return (
    <div className="project-card">
      <img
        src={imageUrl}
        alt={`Imagem do projeto ${title}`}
        className="project-image"
      />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Ver Projeto
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
