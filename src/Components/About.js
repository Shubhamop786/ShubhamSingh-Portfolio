// src/components/About.js
import React from 'react';
import './About.css';
import myPhoto from '../assets/images/pic3.png';


function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left section with the photo */}
        <div className="about-photo">
          <img src={myPhoto} alt="My Photo" />
        </div>

        {/* Right section with the description and button */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
          Hi! I’m Shubham Singh, I hold a B.Tech in Computer Science, which I completed in 2023, and have since completed a professional training and certification course in MERN Stack Development. With a solid foundation in various technologies, including C, C++, Java, Servlets, MySQL, and MongoDB, I specialize in the MERN stack—React, Node.js, Express, and MongoDB—allowing me to build dynamic and responsive applications.
          <br/><br/>

Throughout my learning journey, I've worked on multiple projects, which are showcased in my portfolio alongside my certifications. I am now looking to apply my expertise in a development role, and I am also exploring opportunities as a Power BI developer, aiming to continually grow and expand my skillset.
<br/><br/>
Additionally, you can download my CV by clicking the button below.
          </p>
          <a href="/ShubhamSinghResume.pdf" download className="btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
