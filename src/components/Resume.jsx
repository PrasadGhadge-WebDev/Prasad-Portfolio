import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="section">
      <h2 className="section-title">Resume</h2>
      <div className="resume-preview-container">
        
        {/* Styled Printable CV Mockup Card */}
        <div className="resume-preview-box">
          <div className="resume-header">
            <h3 className="resume-name">PRASAD GHADAGE</h3>
            <p className="resume-title">MCA Graduate | Java Full Stack Developer</p>
            <div className="resume-contact-info">
              <span>📞 +91 97668 75355</span>
              <span>📧 prasadghadge2212@gmail.com</span>
              <span>📍 Maharashtra, India</span>
              <span>🔗 github.com/prasadghadage</span>
            </div>
          </div>

          <h4 className="resume-section-title">Education</h4>
          <div className="resume-section-content">
            <div className="resume-item-row">
              <span className="resume-item-title">Master of Computer Applications (MCA)</span>
              <span className="resume-item-date">2023 - 2025</span>
            </div>
            <p className="resume-item-details">Post-Graduation, specialized in Databases and Java Enterprise architectures.</p>
            
            <div className="resume-item-row">
              <span className="resume-item-title">Bachelor of Commerce (B.Com)</span>
              <span className="resume-item-date">2020 - 2023</span>
            </div>
            <p className="resume-item-details">Acquired business analytics and systems administration fundamentals.</p>
          </div>

          <h4 className="resume-section-title">Technical Skillset</h4>
          <div className="resume-section-content">
            <p><strong>Languages:</strong> Java (SE/EE), JavaScript, SQL, HTML5, CSS3</p>
            <p><strong>Frameworks:</strong> React.js, JSP, Servlets, JDBC, Node.js, Express</p>
            <p><strong>Databases & Tools:</strong> MySQL, MongoDB, Git, GitHub, DBMS Systems</p>
          </div>

          <h4 className="resume-section-title">Key Projects</h4>
          <div className="resume-section-content">
            <div className="resume-item-row">
              <span className="resume-item-title">Single Vendor E-Commerce System</span>
              <span className="resume-item-date">Java, React, MySQL</span>
            </div>
            <p className="resume-item-details">Built catalog systems and local storage basket checkout pathways.</p>

            <div className="resume-item-row">
              <span className="resume-item-title">Movie Booking System</span>
              <span className="resume-item-date">MongoDB, Express, React, Node</span>
            </div>
            <p className="resume-item-details">Created a full-stack seats organizer showing live ticketing stats.</p>
          </div>
        </div>

        {/* Call to action & details column */}
        <div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Ready for Opportunities</h3>
          <p style={{ color: 'hsl(var(--text-secondary))', marginBottom: '24px', fontSize: '1.05rem' }}>
            I am actively applying for <strong>Java Full Stack Developer</strong>, <strong>Software Developer</strong>, and <strong>MERN Stack Developer</strong> roles. Review my qualifications, download my complete resume, and let's discuss how I can add value to your team.
          </p>
          <a 
            href="/Prasad_Ghadage_Resume.pdf" 
            download="Prasad_Ghadage_Resume.pdf"
            className="btn btn-primary"
            style={{ width: 'fit-content' }}
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '18px', height: '18px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download PDF Resume
          </a>
        </div>

      </div>
    </section>
  );
}
