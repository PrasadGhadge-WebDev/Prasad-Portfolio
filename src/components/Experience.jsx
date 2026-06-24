import React from 'react';

export default function Experience() {
  const experiences = [
    {
      date: '2024 - Present',
      role: 'Lead Frontend Architect',
      company: 'Quantum Tech Solutions',
      desc: 'Orchestrating design systems and application state architecture for enterprise cloud platforms. Reduced load times by 40% and established accessible frontend components.',
      side: 'left',
    },
    {
      date: '2022 - 2024',
      role: 'Senior Software Engineer',
      company: 'Apex Digital Systems',
      desc: 'Built custom SaaS microservices and robust API layers. Led a team of four frontend developers to ship three core products using React and TypeScript.',
      side: 'right',
    },
    {
      date: '2020 - 2022',
      role: 'Full-Stack Developer',
      company: 'PixelForge Studios',
      desc: 'Developed high-performance web applications, client-facing dashboards, and modern animations. Optimized queries and DB indexes for better responsiveness.',
      side: 'left',
    },
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className={`timeline-item timeline-item-${exp.side}`}
          >
            <div className="timeline-content">
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-role">{exp.role}</h3>
              <div className="timeline-company">{exp.company}</div>
              <p className="timeline-desc">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
