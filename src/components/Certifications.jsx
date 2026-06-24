import React from 'react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Java Full Stack Development',
      issuer: 'Advanced Software Academy',
      date: 'Completed 2025',
      icon: '☕',
    },
    {
      title: 'Relational Database Design & SQL',
      issuer: 'Oracle Certified Coursework',
      date: 'Completed 2024',
      icon: '💾',
    },
    {
      title: 'Modern React & MERN stack',
      issuer: 'FreeCodeCamp / Developer certification',
      date: 'Completed 2024',
      icon: '⚛️',
    },
    {
      title: 'Git Version Control & Collaboration',
      issuer: 'GitHub Lab Training',
      date: 'Completed 2023',
      icon: '🌿',
    },
  ];

  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>
      <div className="certs-grid">
        {certifications.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <div className="cert-badge-icon">{cert.icon}</div>
            <div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
