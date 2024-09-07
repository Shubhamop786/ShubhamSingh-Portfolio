import React, { useState } from 'react';
import mern from '../assets/images/mern.jpg';
import powerbi from '../assets/images/power bi.jpg';
import core from '../assets/images/corejava.jpg';
import advance from '../assets/images/advjava.jpg';
import intern from '../assets/images/intershala.jpg';
import cplus from '../assets/images/C++.jpg';
import c from '../assets/images/C.jpg';

import './Certificate.css';

const certificatesData = [
  { title: 'MERN Certificate', image: mern },
  { title: 'Power BI Certificate', image: powerbi },
  { title: 'Intershala Certificate', image: intern },
  { title: 'Core Java Certificate', image: core },
  { title: 'Advanced Java Certificate', image: advance },
  { title: 'Intershala Certificate', image: intern },
  { title: 'C++ Certificate', image: cplus },
  { title: 'C Certificate', image: c },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id='certificates' className="certificates">
      <div className="certificates-container">
        <div className="certificates-text">
          <h2>My Certificates</h2>
          <p>
            These are the certifications I have earned to enhance my skills and knowledge in the field of development.
          </p>
        </div>

        {/* First row with 3 certificates */}
        <div className="first-row">
          {certificatesData.slice(0, 3).map((certificate) => (
            <div
              key={certificate.title}
              className={`certificate-item ${selectedCertificate ? 'blur' : ''}`}
              onClick={() => openCertificate(certificate)}
            >
              <img src={certificate.image} alt={certificate.title} className="certificate-image" />
              <p>{certificate.title}</p>
            </div>
          ))}
        </div>

        {/* Second row with 4 certificates */}
        <div className="second-row">
          {certificatesData.slice(3, 7).map((certificate) => (
            <div
              key={certificate.title}
              className={`certificate-item ${selectedCertificate ? 'blur' : ''}`}
              onClick={() => openCertificate(certificate)}
            >
              <img src={certificate.image} alt={certificate.title} className="certificate-image" />
              <p>{certificate.title}</p>
            </div>
          ))}
        </div>

        {/* Modal for showing selected certificate */}
        {selectedCertificate && (
          <div className="certificate-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedCertificate.image} alt={selectedCertificate.title} />
              <p>{selectedCertificate.title}</p>
              <button className="close-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
