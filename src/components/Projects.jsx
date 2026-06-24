import React from 'react';

export default function Projects() {
  const projectList = [
    {
      title: 'Single Vendor E-Commerce System',
      description: 'A fully featured shopping experience for a single merchant storefront. Features catalog filtering, custom cart workflows, and secure mock checkout pathways.',
      tags: ['React.js', 'Java', 'MySQL', 'HTML5', 'CSS3'],
      image: '/project_ecom.png',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Medical Shop Management System',
      description: 'An invoice and inventory dashboard tailored for pharmacies. Features real-time stock counts, batch expiry date warning indicators, and invoice generators.',
      tags: ['Java', 'JSP & Servlets', 'MySQL', 'CSS3'],
      image: '/project_medical.png',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Bank Management System',
      description: 'A secure financial transaction model supporting ledger logs, money transfers, account balance statements, and account updates.',
      tags: ['Java', 'JDBC', 'MySQL', 'Swing Console'],
      image: '/project_bank.png',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Movie Booking System',
      description: 'A responsive MERN stack reservation platform. Supports dynamic seating charts, showtime tracking, and booking summary reports.',
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
      image: '/project_movie.png',
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Selected Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, idx) => (
          <div key={idx} className="project-card">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image"
            />
            <div className="project-content">
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.demoLink} className="project-link">
                  Live Demo ↗
                </a>
                <a href={project.githubLink} className="project-link">
                  Codebase ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
