import React from 'react';
import './SkillCard.css';

const SkillCard = ({ name, icon, color, score }) => {
  return (
    <div className="skill-card-container" style={{ '--skill-color': color }}>
      <div className="skill-score-badge">{score}/10</div>
      <div className="skill-icon">{icon}</div>
      <p className="skill-name">{name}</p>
    </div>
  );
};

export default SkillCard;