// src/components/Header.js
import React from 'react';
import logo from '../assets/images/shubhamlogo3.webp';
import './Header.css';

function Header() {
    return (
      <header className="header">
        <div className="logo">
          <a href="#home"><img src={logo} alt="Logo" /></a>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;