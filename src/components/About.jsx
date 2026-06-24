import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I am a Master of Computer Applications (MCA) graduate with a strong interest in software engineering and Java Full Stack Development. My educational journey has equipped me with solid fundamentals in data structures, database management systems, and web architecture.
          </p>
          <p>
            My passion is writing clean, scalable, and efficient code. I enjoy connecting backend databases with dynamic, interactive frontends, which led me to study both the enterprise Java stack (Servlets, JSP, Hibernate) and the modern MERN stack (MongoDB, Express, React, Node).
          </p>
          <p>
            As a fresher, my goal is to launch my career in a collaborative development environment where I can contribute to real-world applications, expand my skill set, and build impactful software solutions.
          </p>
        </div>
        <div className="about-highlights">
          <div className="highlight-box">
            <div className="highlight-val">MCA</div>
            <div className="highlight-lbl">Post Graduate</div>
          </div>
          <div className="highlight-box">
            <div className="highlight-val">Java</div>
            <div className="highlight-lbl">Primary Focus</div>
          </div>
          <div className="highlight-box">
            <div className="highlight-val">MERN</div>
            <div className="highlight-lbl">Secondary Focus</div>
          </div>
          <div className="highlight-box">
            <div className="highlight-val">4+</div>
            <div className="highlight-lbl">Academic Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}
