import React from "react";
import "./ProjectsSection.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import projectImage1 from "../../images/Portfolio1.png";
import projectImage2 from "../../images/LearnFlix2.png";

const projectsData = [
  {
    title: "Meu Portfólio em HTML & CSS",
    imageUrl: projectImage1,
    projectUrl: "https://codesandbox.io/p/sandbox/at-portfolio-8hfp4d",
    color: 'var(--clr-rose)'
  },
  {
    title: "Projeto de Bloco: LearnFlix",
    imageUrl: projectImage2,
    projectUrl: "https://github.com/Lucas-Calo/meu-projeto-de-bloco.git",
    color: 'var(--clr-indigo)'
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="projects-section">
      <h2 className="section-title">Meus Projetos</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
