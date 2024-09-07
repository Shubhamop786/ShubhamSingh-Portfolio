import React from 'react';
import react from '../assets/images/react.png';
import node from '../assets/images/nodejs.png';
import express from '../assets/images/express-js.png';
import mongodb from '../assets/images/mongo-db.png';
import mysql from '../assets/images/mysql.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import java from '../assets/images/java.png';
import powerbi from '../assets/images/power-bi.png';
import './Skill.css';

const skillsData = [
  { name: 'React', logo: react },
  { name: 'Node.js', logo: node },
  { name: 'Express', logo: express },
  { name: 'MongoDB', logo: mongodb },
  { name: 'MySQL', logo: mysql },
  { name: 'HTML', logo: html },
  { name: 'CSS', logo: css },
  { name: 'Java', logo: java},
  { name: 'Power BI', logo: powerbi },
];

const Skill = () => {
  return (
    <section id="skill" className="skills">
      <div className="skills-container">
        <div className="skills-text">
          <h2>What My Programming Skills Included?</h2>
          <p>
            I develop simple, intuitive, and responsive user interfaces that help users get things done with less effort and time with those technologies.
          </p>
        </div>
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div key={skill.name} className="skill-item">
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
