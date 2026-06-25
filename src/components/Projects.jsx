import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projectList = [
    {
      title: 'Single Vendor E-Commerce System',
      description:
        'A fully featured shopping experience for a single merchant storefront. Features custom product grids, catalog filtering, live cart sync, mock credit card payments, and orders dashboard.',
      tags: ['React.js', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
      image: '/project_ecom.png',
      demoLink: 'https://github.com/prasadghadage',
      githubLink: 'https://github.com/prasadghadage',
    },
    {
      title: 'Movie Booking System',
      description:
        'A responsive MERN stack reservation platform. Supports dynamic seating arrangements, theater layouts, showtime filters, and clean checkout summaries.',
      tags: ['MongoDB', 'Express', 'React.js', 'Node.js'],
      image: '/project_movie.png',
      demoLink: 'https://github.com/prasadghadage',
      githubLink: 'https://github.com/prasadghadage',
    },
    {
      title: 'Medical Shop Management System',
      description:
        'An invoice and inventory dashboard tailored for pharmacies. Features real-time stock counting, expiry warnings, client transaction logging, and automated invoice prints.',
      tags: ['Java', 'JSP & Servlets', 'MySQL', 'JDBC'],
      image: '/project_medical.png',
      demoLink: 'https://github.com/prasadghadage',
      githubLink: 'https://github.com/prasadghadage',
    },
    {
      title: 'Bank Management System',
      description:
        'A transactional core banking model. Handles account registrations, ledger entry tables, secure money transfers, balance statements, and credit/debit audits.',
      tags: ['Java Core', 'Swing UI', 'JDBC', 'MySQL'],
      image: '/project_bank.png',
      demoLink: 'https://github.com/prasadghadage',
      githubLink: 'https://github.com/prasadghadage',
    },
  ];

  return (
    <section id="projects" className="relative w-full max-w-6xl px-6 py-20 md:py-28 z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-14 md:mb-18 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading transition-colors">
          Selected Projects
        </h2>
        <div className="w-12 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projectList.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="flex flex-col rounded-2xl card-glass overflow-hidden hover:border-blue-500/45 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] transition-all duration-305 group"
          >
            {/* Project Image Wrapper */}
            <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600';
                }}
              />
              <div className="absolute inset-0 bg-slate-950/15 group-hover:bg-slate-950/0 transition-colors" />
            </div>

            {/* Content area */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow gap-4">
              {/* Badges row */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/80 dark:border-slate-700/50 text-blue-600 dark:text-blue-400 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title and Description */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide font-heading group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow transition-colors">
                {project.description}
              </p>

              {/* Footer action links */}
              <div className="flex gap-4 border-t border-slate-200 dark:border-slate-800/60 pt-4 mt-2 transition-colors">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon />
                  Codebase
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors ml-auto"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
