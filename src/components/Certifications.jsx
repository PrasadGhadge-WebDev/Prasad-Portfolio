import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Java Full Stack Development',
      issuer: 'Advanced Software Academy',
      date: 'Completed 2025',
      icon: '☕',
      badgeColor: 'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/20',
      link: 'https://github.com/prasadghadage',
    },
    {
      title: 'Relational Database Design & SQL',
      issuer: 'Oracle Certified Coursework',
      date: 'Completed 2024',
      icon: '💾',
      badgeColor: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
      link: 'https://github.com/prasadghadage',
    },
    {
      title: 'Modern React & MERN stack',
      issuer: 'FreeCodeCamp Developer Training',
      date: 'Completed 2024',
      icon: '⚛️',
      badgeColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      link: 'https://github.com/prasadghadage',
    },
    {
      title: 'Git Version Control & Collaboration',
      issuer: 'GitHub Lab Training',
      date: 'Completed 2023',
      icon: '🌿',
      badgeColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      link: 'https://github.com/prasadghadage',
    },
  ];

  return (
    <section id="certifications" className="relative w-full max-w-6xl px-6 py-20 md:py-28 z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-14 md:mb-18 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading transition-colors">
          Licenses & Certifications
        </h2>
        <div className="w-12 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3"></div>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative flex flex-col p-6 rounded-2xl card-glass hover:border-blue-500/40 hover:bg-white dark:hover:bg-slate-900/50 transition-all duration-300 group shadow-lg shadow-black/5"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl" />

            {/* Badge Icon */}
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform w-fit">
              {cert.icon}
            </div>

            {/* Details */}
            <div className="flex flex-col flex-grow gap-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                {cert.title}
              </h3>
              <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 transition-colors">
                {cert.issuer}
              </p>
              <p className="text-xs text-slate-500 transition-colors">{cert.date}</p>
            </div>

            {/* View Button */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/50 hover:bg-blue-600 hover:border-blue-500 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-500 dark:hover:text-white transition-all text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                View Certificate
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
