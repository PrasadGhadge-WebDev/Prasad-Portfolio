import React, { useState } from 'react';

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

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-grid">
        
        {/* Contact Info panel */}
        <div className="contact-info-panel">
          <div className="contact-info-item">
            <div className="contact-info-icon">📞</div>
            <div>
              <div className="contact-info-title">Phone Number</div>
              <div className="contact-info-text">+91 97668 75355</div>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">📧</div>
            <div>
              <div className="contact-info-title">Email Address</div>
              <div className="contact-info-text">prasadghadge2212@gmail.com</div>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">💼</div>
            <div>
              <div className="contact-info-title">LinkedIn Profile</div>
              <a href="#" className="contact-info-text" style={{ textDecoration: 'underline' }}>
                linkedin.com/in/prasadghadage
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">🐙</div>
            <div>
              <div className="contact-info-title">GitHub Profile</div>
              <a href="#" className="contact-info-text" style={{ textDecoration: 'underline' }}>
                github.com/prasadghadage
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form panel */}
        <div className="contact-form-container">
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <h3 style={{ color: 'hsl(var(--color-success))', marginBottom: '16px', fontSize: '1.4rem' }}>
                ✓ Message Formatted Successfully!
              </h3>
              <p style={{ color: 'hsl(var(--text-secondary))', marginBottom: '24px' }}>
                We've prepared your message. Choose how you would like to send it to Prasad:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a 
                  href={deliveryLinks.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ display: 'flex', width: '100%', gap: '8px' }}
                >
                  💬 Send via WhatsApp Chat
                </a>
                <a 
                  href={deliveryLinks.mailto} 
                  className="btn btn-secondary"
                  style={{ display: 'flex', width: '100%', gap: '8px' }}
                >
                  📧 Send via Email Client
                </a>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ border: 'none', fontSize: '0.85rem', color: 'hsl(var(--text-muted))', marginTop: '8px' }}
                >
                  ← Go back to form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name} 
                  onChange={handleChange} 
                  placeholder="e.g. John Doe"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email} 
                  onChange={handleChange} 
                  placeholder="e.g. john@example.com"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formState.subject} 
                  onChange={handleChange} 
                  placeholder="e.g. Interview Opportunity"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formState.message} 
                  onChange={handleChange} 
                  placeholder="Hello Prasad, we'd love to chat about..."
                  className="form-control"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
