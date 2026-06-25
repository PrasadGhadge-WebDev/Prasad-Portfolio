import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#030712] dark:text-slate-100 transition-colors duration-300 selection:bg-blue-500 selection:text-white font-sans overflow-hidden">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/10 dark:bg-blue-500/10 blur-[150px] animate-float opacity-50 dark:opacity-100"></div>
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-500/10 dark:bg-purple-500/10 blur-[180px] animate-float opacity-50 dark:opacity-100"
          style={{ animationDelay: '3s' }}
        ></div>
        <div
          className="absolute top-[40%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-cyan-500/5 dark:bg-cyan-500/5 blur-[120px] animate-float opacity-40 dark:opacity-100"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>

      {/* Navigation Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Recruiter-Focused Premium Footer */}
      <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#070b16] py-12 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand/About Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent tracking-wide font-heading">
              PRASAD GHADAGE
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm">
              MCA Graduate & Java Full Stack Developer. Specializing in building secure enterprise
              backends (Spring Boot) and highly interactive user interfaces (React).
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
              <a
                href="#home"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#education"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Education
              </a>
              <a
                href="#certifications"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Certifications
              </a>
              <a
                href="#contact"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/prasadghadage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all transform hover:-translate-y-1 bg-slate-200 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-slate-700 border border-slate-300 dark:bg-slate-800/50 dark:border-slate-700/50 dark:text-slate-300 dark:hover:bg-blue-600 dark:hover:border-blue-500 dark:hover:text-white"
                aria-label="GitHub"
              >
                🐙
              </a>
              <a
                href="https://linkedin.com/in/prasadghadage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all transform hover:-translate-y-1 bg-slate-200 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-slate-700 border border-slate-300 dark:bg-slate-800/50 dark:border-slate-700/50 dark:text-slate-300 dark:hover:bg-blue-600 dark:hover:border-blue-500 dark:hover:text-white"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="mailto:prasadghadge2212@gmail.com"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all transform hover:-translate-y-1 bg-slate-200 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-slate-700 border border-slate-300 dark:bg-slate-800/50 dark:border-slate-700/50 dark:text-slate-300 dark:hover:bg-blue-600 dark:hover:border-blue-500 dark:hover:text-white"
                aria-label="Email"
              >
                📧
              </a>
              <a
                href="https://leetcode.com/u/prasadghadage/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all transform hover:-translate-y-1 bg-slate-200 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-slate-700 border border-slate-300 dark:bg-slate-800/50 dark:border-slate-700/50 dark:text-slate-300 dark:hover:bg-blue-600 dark:hover:border-blue-500 dark:hover:text-white"
                aria-label="LeetCode"
              >
                📝
              </a>
            </div>
            <span className="text-xs text-slate-500">
              Available for relocation & immediate onboarding
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {currentYear} Prasad Ghadage. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-blue-500 dark:text-blue-400">React</span> +{' '}
            <span className="text-purple-600 dark:text-purple-400">Tailwind CSS</span> +{' '}
            <span className="text-cyan-500 dark:text-cyan-400">Framer Motion</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
