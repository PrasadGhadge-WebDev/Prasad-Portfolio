import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero-sec section">
      <div className="hero-grid">
        <div className="hero-content-col">
          <p className="hero-subtitle">Welcome to my Portfolio</p>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Prasad Ghadage</span>
            <br />
            MCA Fresher &amp; Java Full Stack Developer
          </h1>
          <p className="hero-description">
            I build responsive MERN and Java Full-Stack applications. Passionate about solving
            complex problems, writing clean code, and building interactive web experiences.
          </p>
          <div className="hero-buttons">
            <a href="#resume" className="btn btn-primary">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                style={{ width: '18px', height: '18px' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-circle-accent"></div>
          <img src="/profile.png" alt="Prasad Ghadage Profile" className="hero-img" />
        </div>
      </div>
    </section>
  );
}
