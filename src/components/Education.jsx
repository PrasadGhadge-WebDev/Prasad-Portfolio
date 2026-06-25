import React from 'react';

export default function Education() {
  const educationTimeline = [
    {
      date: '2023 - 2025',
      role: 'Master of Computer Applications (MCA)',
      company: 'Post Graduation',
      desc: 'Focused on advanced software engineering, relational database management systems, data structures, and enterprise web development using Java and JavaScript.',
      side: 'left',
    },
    {
      date: '2020 - 2023',
      role: 'Bachelor of Commerce (B.Com)',
      company: 'Undergraduate Degree',
      desc: 'Acquired foundational skills in corporate finance, business systems, computer applications, and analytical methods.',
      side: 'right',
    },
    {
      date: '2019 - 2020',
      role: 'Higher Secondary Education (12th Grade)',
      company: 'HSC Board',
      desc: 'Completed secondary specialization with focuses in computer science and quantitative mathematics.',
      side: 'left',
    },
    {
      date: '2017 - 2018',
      role: 'Secondary Education (10th Grade)',
      company: 'SSC Board',
      desc: 'Completed general secondary curriculum, achieving foundational mathematical and analytical marks.',
      side: 'right',
    },
  ];

  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationTimeline.map((edu, idx) => (
          <div key={idx} className={`timeline-item timeline-item-${edu.side}`}>
            <div className="timeline-content">
              <div className="timeline-date">{edu.date}</div>
              <h3 className="timeline-role">{edu.role}</h3>
              <div className="timeline-company">{edu.company}</div>
              <p className="timeline-desc">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
