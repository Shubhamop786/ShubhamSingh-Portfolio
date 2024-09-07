import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import gmailLogo from '../assets/images/Gmail.png';
import linkedinLogo from '../assets/images/linkedin-logo.jpg';
import githubLogo from '../assets/images/github.png';
import whatsappLogo from '../assets/images/whatsapp.png';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fxwprww', 'template_78m8rer', e.target, 'CaRyI2TDWxidXpThz')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message, please try again.');
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit">Send Message</button>
        </form>

        <div className="social-links">
          <a href="mailto:singhshubham9288@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={gmailLogo} alt="Gmail" /> singhshubham9283@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/shubham-singh-728b03213/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" /> Shubham Singh
          </a>
          <a href="https://github.com/Shubhamop786" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" /> Shubham Github
          </a>
          <a href="https://wa.me/917611111932" target="_blank" rel="noopener noreferrer">
            <img src={whatsappLogo} alt="WhatsApp" /> +917611111932
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
