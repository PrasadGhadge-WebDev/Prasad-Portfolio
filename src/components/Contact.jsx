import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowLeft, CheckCircle2 } from 'lucide-react';

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-blue-600 dark:text-blue-500"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [deliveryLinks, setDeliveryLinks] = useState({ whatsapp: '', mailto: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formState;
    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields.');
      return;
    }

    // Format text for WhatsApp Click to Chat
    const waText = `Hello Prasad,%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Subject:* ${encodeURIComponent(subject)}%0A%0A*Message:*%0A${encodeURIComponent(message)}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919766875355&text=${waText}`;

    // Format text for Mailto client redirect
    const mailtoUrl = `mailto:prasadghadge2212@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;

    setDeliveryLinks({ whatsapp: whatsappUrl, mailto: mailtoUrl });
    setIsSubmitted(true);

    // Attempt to open WhatsApp in a new tab immediately
    window.open(whatsappUrl, '_blank');

    // Reset form fields
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const contactDetails = [
    {
      icon: <Phone className="text-blue-600 dark:text-blue-400" size={20} />,
      title: 'Phone Number',
      value: '+91 97668 75355',
      href: 'tel:+919766875355',
    },
    {
      icon: <Mail className="text-purple-600 dark:text-purple-400" size={20} />,
      title: 'Email Address',
      value: 'prasadghadge2212@gmail.com',
      href: 'mailto:prasadghadge2212@gmail.com',
    },
    {
      icon: <LinkedinIcon />,
      title: 'LinkedIn Profile',
      value: 'linkedin.com/in/prasadghadage',
      href: 'https://linkedin.com/in/prasadghadage',
    },
    {
      icon: <MapPin className="text-emerald-600 dark:text-emerald-400" size={20} />,
      title: 'Location',
      value: 'Maharashtra, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative w-full max-w-6xl px-6 py-20 md:py-28 z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-14 md:mb-18 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading transition-colors">
          Get In Touch
        </h2>
        <div className="w-12 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
        {/* Left Side: Contact Details cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide font-heading text-center lg:text-left transition-colors">
            Let's Start a Conversation
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-center lg:text-left transition-colors">
            I am actively seeking software engineer opportunities, interview requests, or
            collaborative project ideas. Drop me a line, and I will get back to you immediately!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mt-2">
            {contactDetails.map((item, idx) => {
              const CardContent = (
                <div className="flex items-center gap-4 p-5 rounded-2xl card-glass transition-colors">
                  <div className="p-3 rounded-xl icon-bg">{item.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider transition-colors">
                      {item.title}
                    </span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-1 break-all transition-colors">
                      {item.value}
                    </span>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  {CardContent}
                </a>
              ) : (
                <div key={idx} className="block">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Form / Success Card */}
        <div className="lg:col-span-7 w-full p-6 sm:p-8 rounded-2xl card-glass shadow-lg shadow-black/5">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center py-8 text-center"
              >
                <CheckCircle2 className="text-emerald-600 dark:text-emerald-400 w-16 h-16 mb-4 animate-bounce" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide font-heading transition-colors">
                  Message Prepared!
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-sm transition-colors">
                  We've successfully structured your details. Choose how you would like to route
                  this message directly to Prasad:
                </p>

                <div className="flex flex-col gap-3 w-full max-w-md mt-8">
                  <a
                    href={deliveryLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-green-650 hover:bg-green-600 text-white font-bold transition-colors text-sm shadow-md cursor-pointer"
                  >
                    <MessageSquare size={16} />
                    Send via WhatsApp
                  </a>

                  <a
                    href={deliveryLinks.mailto}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors text-sm shadow-md cursor-pointer"
                  >
                    <Mail size={16} />
                    Send via Email
                  </a>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-350 hover:text-slate-900 dark:hover:text-slate-200 transition-all text-xs font-semibold mt-4 border border-slate-300 dark:border-slate-700/60 cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                    Back to Form
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="input-field"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Interview / Hiring Opportunity"
                    className="input-field"
                    required
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Hello Prasad, we'd love to chat about..."
                    className="input-field min-h-[140px] resize-y"
                    required
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold transition-all text-sm shadow-md hover:shadow-blue-500/20 transform hover:-translate-y-0.5 cursor-pointer mt-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
