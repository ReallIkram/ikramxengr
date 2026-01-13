import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // This creates a direct link to their mail app
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hi Ikram,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    window.location.href = `mailto:ikrambtm444@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <p className="hero-eyebrow" style={{fontSize:"40px"}}>Get In Touch</p>
          <h2 className="section-title">Let's Build <span>Something</span></h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="contact-glass-card transition-300">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <label className="form-label">Identity</label>
                  <input 
                    type="text" 
                    className="cyber-input" 
                    placeholder="Your Name" 
                    required 
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="form-label">Digital Address</label>
                  <input 
                    type="email" 
                    className="cyber-input" 
                    placeholder="email@example.com" 
                    required 
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="form-label">Transmission</label>
                  <textarea 
                    className="cyber-input" 
                    rows="4" 
                    placeholder="Project details..." 
                    required
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="cyber-btn w-100">
                  Initialize Transmission <Send size={18} className="ms-2" />
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="social-links-footer mt-5 d-flex justify-content-center gap-4">
              <a href="https://github.com/IKRAM-ULLAH-4" className="social-icon"><Github /></a>
              <a href="https://www.linkedin.com/in/ikram-ullah-416b74232/" className="social-icon"><Linkedin /></a>
              <a href="mailto:ikrambtm444@gmail.com" className="social-icon"><Mail /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;