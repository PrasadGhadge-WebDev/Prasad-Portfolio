import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Target, Heart } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <BookOpen className="text-blue-600 dark:text-blue-400" size={24} />,
      title: 'Education',
      desc: 'MCA Postgraduate focused on core software engineering principles, databases, and enterprise architecture models.',
    },
    {
      icon: <Award className="text-purple-600 dark:text-purple-400" size={24} />,
      title: 'Technical Skills',
      desc: 'Proficient across both frontend (React, JavaScript, CSS3) and robust backend layers (Java, Spring Boot, MySQL).',
    },
    {
      icon: <Target className="text-cyan-600 dark:text-cyan-400" size={24} />,
      title: 'Career Goals',
      desc: 'Seeking developer roles in forward-thinking teams to deploy clean code, build microservices, and optimize systems.',
    },
    {
      icon: <Heart className="text-emerald-600 dark:text-emerald-400" size={24} />,
      title: 'Core Values',
      desc: 'Committed to code readability, performant state management, API security, and high-fidelity user experiences.',
    },
  ];

  return (
    <section id="about" className="relative w-full max-w-6xl px-6 py-20 md:py-28 z-10">
      {/* Title */}
      <div className="flex flex-col items-center mb-14 md:mb-18 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading transition-colors">
          About Me
        </h2>
        <div className="w-12 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Professional bio details */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-slate-700 dark:text-slate-300 transition-colors">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide font-heading">
            Bridging Client Interactivity and Backend Enterprise Logic
          </h3>
          <p className="leading-relaxed">
            I am a Master of Computer Applications (MCA) graduate specialized in Java Full Stack and
            MERN Stack software development. During my academic studies, I fell in love with
            connecting complex server logic with responsive, user-friendly frontend designs.
          </p>
          <p className="leading-relaxed">
            Whether architecting normalized databases in SQL, implementing MVC controllers in Spring
            Boot, or handling interactive lifecycle states in React, I focus on coding with
            precision, clarity, and scalability in mind.
          </p>
          <p className="leading-relaxed">
            I'm looking to launch my career as a full-time software developer in a collaborative
            team environment. I bring immediate availability, a passion for continuous learning, and
            strong technical foundations.
          </p>
        </div>

        {/* Right Glassmorphic highlights panels */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl card-glass hover:border-blue-500/40 hover:bg-white dark:hover:bg-slate-900/50 transition-all duration-300 group flex flex-col gap-4"
            >
              <div className="p-3 rounded-xl icon-bg w-fit group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-wide transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
