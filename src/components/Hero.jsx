import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Code, GraduationCap, FolderGit2, Briefcase, Coffee, Download } from 'lucide-react';

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const words = [
  'Java Full Stack Developer',
  'React Developer',
  'Spring Boot Developer',
  'MCA Graduate',
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 40 : 100,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    setCurrentText(words[index].substring(0, subIndex));
  }, [subIndex, index]);

  const socialLinks = [
    { href: 'https://github.com/prasadghadage', icon: <GithubIcon />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/prasadghadage', icon: <LinkedinIcon />, label: 'LinkedIn' },
    { href: 'mailto:prasadghadge2212@gmail.com', icon: <Mail size={20} />, label: 'Email' },
    { href: 'https://leetcode.com/u/prasadghadage/', icon: <Code size={20} />, label: 'LeetCode' },
  ];

  const achievements = [
    {
      icon: <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />,
      title: 'MCA Graduate',
      desc: 'Post Graduation',
    },
    {
      icon: <FolderGit2 className="text-purple-600 dark:text-purple-400" size={28} />,
      title: '5+ Projects',
      desc: 'Interactive Portfolios',
    },
    {
      icon: <Briefcase className="text-emerald-600 dark:text-emerald-400" size={28} />,
      title: 'Open To Work',
      desc: 'Immediate Onboarding',
    },
    {
      icon: <Coffee className="text-cyan-600 dark:text-cyan-400" size={28} />,
      title: 'Full Stack Dev',
      desc: 'Java / React Focus',
    },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 pt-24 md:pt-32 pb-16 z-10 overflow-hidden"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-5 dark:opacity-10 pointer-events-none transition-opacity duration-300"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Hero Left Content Column */}
        <div className="md:col-span-7 flex flex-col gap-6 text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-heading leading-tight transition-colors duration-300">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent">
                Prasad Ghadage
              </span>
            </h1>

            {/* Animated Typing Text */}
            <div className="h-10 sm:h-12 flex items-center justify-center md:justify-start">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-300 font-sans transition-colors duration-300">
                I'm a{' '}
                <span className="typing-cursor font-bold text-blue-600 dark:text-blue-400">
                  {currentText}
                </span>
              </h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl transition-colors duration-300"
          >
            Passionate developer skilled in building secure enterprise-grade systems with Java &
            Spring Boot, alongside modern dynamic frontends in React. Seeking software engineering
            opportunities to deliver value.
          </motion.p>

          {/* Social Icons row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4 items-center justify-center md:justify-start"
          >
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center justify-center md:justify-start mt-2"
          >
            <a
              href="/Prasad_Ghadage_Resume.pdf"
              download="Prasad_Ghadage_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 text-sm cursor-pointer"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-white border border-slate-350 hover:bg-slate-100 text-slate-800 dark:bg-slate-900/80 dark:border-slate-800 dark:hover:bg-slate-800 dark:text-slate-200 dark:hover:text-white font-semibold transition-all transform hover:-translate-y-0.5 text-sm"
            >
              Hire Me
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-semibold transition-colors text-sm"
            >
              Contact Me &rarr;
            </a>
          </motion.div>
        </div>

        {/* Hero Right Image Column */}
        <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
          >
            {/* Glowing Backdrop Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-20 dark:opacity-35 animate-pulse transition-opacity"></div>

            {/* Dashed outer orbiting ring */}
            <div className="absolute inset-[-12px] rounded-full border border-dashed border-blue-500/20 dark:border-blue-500/30 animate-[spin_50s_linear_infinite]"></div>

            {/* Profile image wrapper */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 shadow-xl dark:shadow-2xl dark:shadow-blue-500/10 flex items-center justify-center transition-colors">
              <img
                src="/profile.png"
                alt="Prasad Ghadage Profile"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Achievement Cards row */}
      <div className="max-w-6xl w-full mt-20 sm:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full"
        >
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-5 rounded-2xl card-glass transition-all hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] group"
            >
              <div className="p-3 rounded-xl icon-bg group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-slate-900 dark:text-white tracking-wide transition-colors">
                  {item.title}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
