import React from 'react';
import './ProgramCard.css';

const ProgramCard = ({ program }) => {
  return (
    <div className="program-card" style={{ '--card-color': program.color }}>
      <div className="program-image">
        <div className="image-emoji">{program.image}</div>
      </div>

      <div className="program-content">
        <div className="program-header">
          <h3>{program.title}</h3>
          <span className={`level-badge level-${program.level.toLowerCase()}`}>
            {program.level}
          </span>
        </div>

        <p className="program-description">{program.description}</p>

        <div className="program-meta">
          <div className="meta-item">
            <span className="meta-icon">👤</span>
            <span className="meta-text">{program.forWho}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">⏱️</span>
            <span className="meta-text">{program.duration}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">📅</span>
            <span className="meta-text">{program.days} дней/неделю</span>
          </div>
        </div>

        <button className="btn btn-secondary">Выбрать программу</button>
      </div>
    </div>
  );
};

export default ProgramCard;
