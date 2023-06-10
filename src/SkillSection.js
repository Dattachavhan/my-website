import React from 'react';
import './SkillSection.css';

const SkillSection = () => {
  return (
    <div className="skill-section">
      <h2 className="section-heading">Skills</h2>
      <div className="skill-cards">
        <div className="skill-card">
          <i className="icon fas fa-code"></i>
          <h3 className="card-heading">Web Development</h3>
          <p className="card-description">
            Proficient in HTML, CSS, and JavaScript. Experience with frameworks like React and Angular.
          </p>
        </div>
        <div className="skill-card">
          <i className="icon fas fa-database"></i>
          <h3 className="card-heading">Google Analytics</h3>
          <p className="card-description">
            Skilled in working with Google Analytics such as creating tags, triggers and variables. Familiar with creating custom reports.
          </p>
        </div>
        <div className="skill-card">
          <i className="icon fas fa-mobile"></i>
          <h3 className="card-heading">Mobile App Development</h3>
          <p className="card-description">
            Experience in developing cross-platform mobile apps using React Native and Flutter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
