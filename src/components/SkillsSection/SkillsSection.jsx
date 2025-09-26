import React from "react";
import "./SkillsSection.css";
import SkillCard from "../SkillCard/SkillCard";

//Importando os icones:
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoReact, IoLogoGithub } from 'react-icons/io5';
import { DiGit } from 'react-icons/di';

const skills = [
  {
    name: 'HTML',
    icon: <IoLogoHtml5 />,
    color: '#E34F26',
    score: 10
  },
  {
    name: 'JavaScript',
    icon: <IoLogoJavascript />,
    color: '#F7DF1E',
    score: 9
  },
  {
    name: 'CSS',
    icon: <IoLogoCss3 />,
    color: '#1572B6',
    score: 9
  },
  {
    name: 'React',
    icon: <IoLogoReact />,
    color: '#61DAFB',
    score: 8
  },
   {
    name: 'GitHub',
    icon: <IoLogoGithub />,
    color: '#070a13',
    score: 8
  },
  {
    name: 'Git',
    icon: <DiGit />,
    color: '#F05032',
    score: 8
  },
 
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="skills-section">
      <h2 className="section-title">Minhas Habilidades</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
            score={skill.score}
          />
        ))}
      </div>
    </section>
  );
};


export default SkillsSection;
