import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Server, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <LayoutGrid className="text-blue-600 dark:text-blue-400" size={24} />,
      skills: [
        { name: 'React.js', level: '80%' },
        { name: 'JavaScript (ES6+)', level: '82%' },
        { name: 'HTML5', level: '90%' },
        { name: 'CSS3 / Tailwind CSS', level: '88%' },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-purple-600 dark:text-purple-400" size={24} />,
      skills: [
        { name: 'Core Java (SE/EE)', level: '90%' },
        { name: 'Spring Boot', level: '78%' },
        { name: 'JSP & Servlets', level: '85%' },
        { name: 'JDBC / APIs', level: '80%' },
      ],
    },
    {
      title: 'Database Engineering',
      icon: <Database className="text-cyan-600 dark:text-cyan-400" size={24} />,
      skills: [
        { name: 'MySQL Database', level: '85%' },
        { name: 'DBMS Fundamentals', level: '88%' },
        { name: 'SQL Queries & Indexing', level: '84%' },
      ],
    },
    {
      title: 'Tools & Methodologies',
      icon: <Wrench className="text-emerald-600 dark:text-emerald-400" size={24} />,
      skills: [
        { name: 'Git & GitHub', level: '80%' },
        { name: 'Postman API Client', level: '82%' },
        { name: 'VS Code / IntelliJ IDEA', level: '88%' },
        { name: 'SDLC & OOP Concepts', level: '85%' },
      ],
    },
  ];

  return (
    <section id="skills" className="relative w-full max-w-6xl px-6 py-20 md:py-28 z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-14 md:mb-18 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading transition-colors">
          Technical Skills
        </h2>
        <div className="w-12 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3"></div>
      </div>

      {/* Grid containing categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 sm:p-8 rounded-2xl card-glass hover:border-blue-500/40 transition-all duration-300 group shadow-lg shadow-black/5"
          >
            {/* Header of card */}
            <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-4 mb-6 transition-colors">
              <div className="p-3 rounded-xl icon-bg group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-wide font-heading transition-colors">
                {category.title}
              </h3>
            </div>

            {/* List of skills inside category */}
            <div className="flex flex-col gap-5">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors">
                    <span>{skill.name}</span>
                    <span className="text-slate-500 dark:text-slate-400 font-semibold transition-colors">
                      {skill.level}
                    </span>
                  </div>

                  {/* Progress bar container */}
                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden transition-colors">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: sIdx * 0.05 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
