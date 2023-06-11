import React from 'react';
import './SkillImages.css';
import jsLogo from './images/js.png';
import angularLogo from './images/angular.png';
import reactLogo from './images/react.png';
import htmlLogo from './images/html.png';
import cssLogo from './images/css.png';
import highchartLogo from './images/highchart.png';
import aggridLogo from './images/ag-grid.png';
import gaLogo from './images/ga.png';

const SkillImages = () => {
  const skills = [
    { name: 'Angular', image: angularLogo },
    { name: 'React', image: reactLogo },
    { name: 'JavaScript', image: jsLogo },
    { name: 'HTML', image: htmlLogo },
    { name: 'CSS', image: cssLogo },
    { name: 'Highcharts', image: highchartLogo },
    { name: 'Ag-Grid', image: aggridLogo },
    { name: 'Google Analytics', image: gaLogo }
  ];

  return (
    <div>
      <div className="skill-images">
        {skills.map((skill, index) => (
          <div className="skill-image" key={index}>
          <img src={skill.image} alt={skill.name} className="skill-image__logo" />
          {/* <span className='skill-image__name'>{skill.name}</span> */}
        </div>
        ))}
      </div>
    </div>
  );
};

export default SkillImages;
