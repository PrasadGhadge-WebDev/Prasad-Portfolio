import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="app-container">
      {/* Dynamic Glow Backdrops */}
      <div className="glow-backdrop">
        <div className="glow-sphere glow-sphere-1"></div>
        <div className="glow-sphere glow-sphere-2"></div>
      </div>

      {/* Header containing the theme toggle */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Structured Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      {/* Footer detailing Nav, socials, and copyright */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about-col">
            <h3 className="logo-text">PRASAD.G</h3>
            <p>
              An MCA Fresher specializing in Java Full Stack and MERN Stack development. Seeking
              software engineering opportunities.
            </p>
          </div>
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul className="footer-links-grid">
              <li className="footer-link-item">
                <a href="#home">Home</a>
              </li>
              <li className="footer-link-item">
                <a href="#about">About</a>
              </li>
              <li className="footer-link-item">
                <a href="#skills">Skills</a>
              </li>
              <li className="footer-link-item">
                <a href="#projects">Projects</a>
              </li>
              <li className="footer-link-item">
                <a href="#education">Education</a>
              </li>
              <li className="footer-link-item">
                <a href="#certifications">Certs</a>
              </li>
              <li className="footer-link-item">
                <a href="#resume">Resume</a>
              </li>
              <li className="footer-link-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-social-col">
            <h4>Connect</h4>
            <div className="footer-social-links">
              <a
                href="https://github.com/prasadghadage"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                🐙
              </a>
              <a
                href="https://linkedin.com/in/prasadghadage"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="mailto:prasadghadge2212@gmail.com"
                className="footer-social-link"
                aria-label="Email"
              >
                📧
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Prasad Ghadage. All rights reserved.</p>
          <p>Designed with modern MERN Stack aesthetics.</p>
        </div>
      </footer>
    </div>
  );
}
