// src/App.js
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skill';
import Projects from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import Certificates from './Components/Certificate';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <About />
      <Skill />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
