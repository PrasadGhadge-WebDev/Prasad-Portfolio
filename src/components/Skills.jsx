import React, { useEffect, useState } from 'react';

export default function Skills() {
  const skillsList = [
    { name: 'Java SE / EE', level: '90%' },
    { name: 'JSP & Servlets', level: '85%' },
    { name: 'React.js', level: '80%' },
    { name: 'JavaScript (ES6+)', level: '82%' },
    { name: 'HTML5 & CSS3', level: '90%' },
    { name: 'MySQL Database', level: '85%' },
    { name: 'Git & GitHub', level: '80%' },
    { name: 'DBMS Fundamentals', level: '88%' },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Soft delay to trigger fill animation on mount
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-sec-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-bar-wrapper">
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: animate ? skill.level : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
