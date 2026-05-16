import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp, Mail, Terminal } from 'lucide-react';
import { useTheme } from "../Context/ThemeContext";

const Footer = () => {
  const { bg } = useTheme() || { bg: false };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`py-5 border-top transition-all ${
        bg ? "bg-dark text-white border-secondary" : "bg-white text-dark border-light"
      }`}
      style={{ 
        backgroundColor: bg ? '#0f172a' : '#ffffff',
        borderColor: bg ? '#1e293b' : '#e9ecef',
        transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease"
      }}
    >
      <div className="container-fluid container-xl px-4">
        <div className="row gy-4 align-items-center">
          
          {/* BRANDING / IDENTITY */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <a href="#home" className="text-decoration-none d-inline-flex align-items-center gap-2 mb-2">
              <Terminal size={20} className="text-success" />
              <span className={`fw-bold tracking-tight fs-5 ${bg ? "text-white" : "text-dark"}`}>
                Ikram<span className="text-success"> Ullah</span>
              </span>
            </a>
            <p className={`small mb-0 opacity-75 ${bg ? "text-slate-400" : "text-muted"}`}>
              Building high-performance web solutions with clean, modern code.
            </p>
          </div>

          {/* SOCIAL LINKS ARCHITECTURE */}
          <div className="col-12 col-md-4 d-flex justify-content-center gap-3">
            <a 
              href="https://github.com/IKRAM-ULLAH-4" 
              target="_blank" 
              rel="noreferrer"
              className={`p-2.5 rounded-circle d-flex align-items-center justify-content-center text-decoration-none transition-all footer-social-icon ${
                bg ? "bg-dark-soft text-light" : "bg-light-soft text-dark"
              }`}
              style={{
                backgroundColor: bg ? '#1e293b' : '#f1f3f5',
                width: '42px',
                height: '42px'
              }}
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a 
              href="https://www.linkedin.com/in/ikram-ullah-416b74232?utm_source=share_via&utm_content=profile&utm_medium=member_android" // Update with your actual LinkedIn link
              target="_blank" 
              rel="noreferrer"
              className={`p-2.5 rounded-circle d-flex align-items-center justify-content-center text-decoration-none transition-all footer-social-icon ${
                bg ? "bg-dark-soft text-light" : "bg-light-soft text-dark"
              }`}
              style={{
                backgroundColor: bg ? '#1e293b' : '#f1f3f5',
                width: '42px',
                height: '42px'
              }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <a 
              href="mailto:ikrambtm444@gmail.com" 
              className={`p-2.5 rounded-circle d-flex align-items-center justify-content-center text-decoration-none transition-all footer-social-icon ${
                bg ? "bg-dark-soft text-light" : "bg-light-soft text-dark"
              }`}
              style={{
                backgroundColor: bg ? '#1e293b' : '#f1f3f5',
                width: '42px',
                height: '42px'
              }}
              aria-label="Email Me"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* SCROLL BACK TO TOP ACTION */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <button
              onClick={scrollToTop}
              className="btn btn-link text-decoration-none p-0 d-inline-flex align-items-center gap-2 text-success fw-semibold small text-hover-success border-0 bg-transparent"
            >
              Back to top 
              <span className="p-2 rounded-circle bg-success bg-opacity-10 d-inline-flex align-items-center justify-content-center back-to-top-arrow">
                <ArrowUp size={16} />
              </span>
            </button>
          </div>

        </div>

        {/* SUB-FOOTER REFINED CARDS DIVISION */}
        <hr className={`my-4 opacity-25 ${bg ? "bg-light" : "bg-dark"}`} style={{ borderColor: bg ? '#334155' : '#dee2e6' }} />
        
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
          <p className="small mb-0 opacity-50 font-monospace" style={{ fontSize: '0.75rem' }}>
            &copy; {currentYear} Ikram Ullah. All rights reserved.
          </p>
          <div className="d-flex gap-3 style-eyebrow" style={{ fontSize: '0.7rem' }}>
            <span className="opacity-50">Designed & Engineered with Passion</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;