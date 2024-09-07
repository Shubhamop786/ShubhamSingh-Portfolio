import React, { useState } from 'react';
import ecommerce from '../assets/images/E-Commerce.png';
import todo from '../assets/images/todo.png';
import bbms from '../assets/images/BBMS.png';
import powerbi from '../assets/images/Powerbiprj.png';
import emp from '../assets/images/emp.png';
import weather from '../assets/images/weatherforecast.png';
import dyson from '../assets/images/Dyson.png';
import airbnb from '../assets/images/airbnb.png';

import addidas from '../assets/images/addidas.png';
import './Project.css';

const projectsData = [
  { title: 'E-Commerce', image: ecommerce, description: 'I developed a full-stack e-commerce website, utilizing React for the frontend to create a dynamic and responsive user interface. The backend was powered by Node.js and the Express framework, allowing seamless integration between the server and database. This project involved implementing features such as user authentication, product listing, and order management, which enhanced my expertise in RESTful API development, state management with React, and database interactions. It strengthened my ability to build scalable web applications while ensuring an optimal user experience.' },
  { title: 'To-Do List', image: todo, description: 'I developed a To-Do list web application using HTML, CSS, and JavaScript, which allows users to efficiently manage their tasks. The project enhances my skills in creating intuitive user interfaces and working with dynamic data using JavaScript. Through this app, I improved my ability to structure web layouts with CSS and manage user interactions in a seamless manner. This project helped me deepen my understanding of front-end technologies and responsive design, ensuring smooth functionality across different devices.' },
  { title: 'Blood Bank Management System', image: bbms, description: 'The Blood Bank Management System project I developed leverages HTML, CSS, JavaScript, JSON, and jQuery to create a seamless and intuitive platform for managing blood donations and requests. The system allows users to search for and receive blood directly, ensuring a streamlined process for both donors and recipients. Working on this project honed my skills in front-end web development and integrating various technologies to create functional web applications. The use of jQuery added dynamic interactivity, enhancing user experience and demonstrating my ability to handle real-world solutions efficiently.' },
  { title: 'Power Bi Dashboard', image: powerbi, description: 'I developed a dashboard for SN Corp Pvt Ltd using Power BI, transforming raw Excel data into a visually comprehensive and interactive dashboard. This project enhanced my data visualization skills and deepened my understanding of Power BI advanced functionalities, including data modeling, DAX formulas, and dynamic reporting. The experience has equipped me with the ability to turn unstructured data into actionable insights, further strengthening my analytical capabilities.' },
  { title: 'Employee Management', image: emp, description: 'I developed an Employee Management System using Node.js, Express.js, EJS, and MongoDB, implementing full CRUD functionality. The system allows users to add, edit, and delete employee records efficiently. Through this project, I enhanced my backend development skills, gaining deeper insights into building RESTful APIs, managing databases, and rendering dynamic content using EJS. This experience further strengthened my ability to create scalable, database-driven applications while working with modern web technologies.' },
  { title: 'Weather Forecast', image: weather, description: 'I built a Weather Forecast Web App using HTML, CSS, and JavaScript, allowing users to get real-time weather updates for any location. This project helped me strengthen my skills in API integration, as I fetched data from a third-party weather API and displayed it dynamically.Additionally, I improved my front-end development expertise by focusing on responsive design and user-friendly interfaces. The project honed my ability to work with asynchronous JavaScript and enhanced my problem-solving skills in creating interactive web applications.' },
  { title: 'Dyson', image: dyson, description: 'I developed the Dyson Web App using HTML and CSS, focusing on creating a visually appealing and responsive design. This project allowed me to practice advanced CSS techniques such as flexbox and grid layout, enhancing my ability to build modern, adaptable user interfaces. By paying attention to detail and implementing a clean, consistent design, I improved my skills in layout design and cross-browser compatibility. This project also strengthened my proficiency in translating design mockups into functional web pages, showcasing my capability to create polished and user-centric websites.' },
  { title: 'Airbnb Clone', image: airbnb, description: 'I developed an Airbnb clone web app using HTML and CSS to replicate the design and functionality of the popular rental platform. This project involved creating a clean, responsive layout with a focus on user experience and visual appeal. By implementing advanced CSS techniques such as grid and flexbox, I enhanced my ability to build modern, adaptable user interfaces. This project also refined my skills in creating interactive elements and ensuring cross-browser compatibility, demonstrating my capability to translate complex design requirements into a functional and aesthetically pleasing web application.' },
  
  { title: 'Adidas Store', image: addidas, description: 'I created an Adidas web app as part of my HTML and CSS practice, focusing on replicating the brands sleek and modern design. This project allowed me to refine my skills in styling, layout, and responsive design, ensuring a visually appealing and functional user interface. By utilizing advanced CSS techniques and optimizing for different screen sizes, I enhanced my ability to create engaging and adaptive web experiences. This project also strengthened my proficiency in translating design concepts into code, showcasing my capability to deliver high-quality web applications.' }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className={`project-list ${selectedProject ? 'blurred' : ''}`}>
        {projectsData.map((project) => (
          <div
            key={project.title}
            className={`project ${selectedProject === project ? 'active' : ''}`}
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-overlay" onClick={handleClose}>
          <div className="project-detail" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProject.image} alt={selectedProject.title} className="project-detail-image" />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
