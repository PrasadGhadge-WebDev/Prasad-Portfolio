import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, GraduationCap } from 'lucide-react';

export default function Education() {
  const timeline = [
    {
      year: '2023 - 2025',
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Post-Graduate Specialized Degree',
      details:
        'Focused on advanced software engineering processes, database architectures (SQL/NoSQL), object-oriented programming, data structures, and enterprise full-stack development.',
    },
    {
      year: '2020 - 2023',
      degree: 'Bachelor of Commerce (B.Com)',
      institution: 'Undergraduate Degree',
      details:
        'Developed analytical frameworks, corporate statistics knowledge, mathematical analysis methods, and introductory computer applications configurations.',
    },
    {
      year: '2019 - 2020',
      degree: 'Higher Secondary Certificate (12th Grade)',
      institution: 'State Board Examination',
      details:
        'Completed secondary focus with primary concentrations in computer systems, mathematics, and quantitative business administration.',
    },
    {
      year: '2017 - 2018',
      degree: 'Secondary School Certificate (10th Grade)',
      institution: 'State Board Examination',
      details:
        'Finished foundational general education curriculum, achieving top scores in mathematics, logic reasoning, and basic science modules.',
    },
  ];

  return (
    <section id="education" className="relative w-full max-w-4xl px-6 py-20 md:py-28 z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-14 md:mb-18 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading transition-colors">
          Education History
        </h2>
        <div className="w-12 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3"></div>
      </div>

      {/* Timeline core tree */}
      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-0 md:left-1/2 md:transform md:-translate-x-1/2 flex flex-col gap-12 w-full max-w-[800px] transition-colors duration-300">
        {timeline.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className="relative w-full flex flex-col md:flex-row md:justify-between items-start md:items-center"
            >
              {/* Central orbiting circle connector */}
              <div className="absolute left-[-21px] md:left-1/2 md:transform md:-translate-x-1/2 top-2 md:top-auto w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-950 border-4 border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-md shadow-blue-500/5 transition-colors duration-300">
                <GraduationCap size={16} />
              </div>

              {/* Layout columns spacer / placement */}
              <div
                className={`w-full md:w-[45%] pl-8 md:pl-0 ${isLeft ? 'md:order-1 md:text-right' : 'md:order-3 md:text-left'}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl card-glass hover:border-blue-500/40 transition-all duration-300 shadow-lg shadow-black/5 flex flex-col gap-3"
                >
                  {/* Calendar year */}
                  <div
                    className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 ${isLeft ? 'md:justify-end' : 'justify-start'}`}
                  >
                    <Calendar size={12} />
                    <span>{item.year}</span>
                  </div>

                  {/* Title details */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading transition-colors">
                      {item.degree}
                    </h3>
                    <div
                      className={`flex items-center gap-1.5 text-xs text-purple-600 dark:text-purple-400 font-medium mt-1 transition-colors ${isLeft ? 'md:justify-end' : 'justify-start'}`}
                    >
                      <Building2 size={12} />
                      <span>{item.institution}</span>
                    </div>
                  </div>

                  {/* Description details */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-1 transition-colors">
                    {item.details}
                  </p>
                </motion.div>
              </div>

              {/* Balanced alignment side node placeholder on large displays */}
              <div className="hidden md:block w-[45%] md:order-2"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
