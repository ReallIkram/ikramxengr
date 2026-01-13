import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          {/* Scroll to Top Trigger */}
          <div className="scroll-btn-wrapper">
            <button className="scroll-top-pill" onClick={scrollToTop}>
              <ArrowUp size={20} className="me-2" />
              <span>Back to Top</span>
            </button>
          </div>

          <div className="footer-brand">
            <h3 className="brand-logo">
              <span className="accent-code">&lt;</span>
              IKRAM ULLAH
              <span className="accent-code">/&gt;</span>
            </h3>
            <p className="footer-motto">Software Engineer & Web3 Enthusiast</p>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/IKRAM-ULLAH-4" target="_blank" rel="noreferrer" className="social-pill">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="social-pill">
              <Linkedin size={18} />
            </a>
            <a href="mailto:ikrambtm444@gmail.com" className="social-pill">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} All Rights Reserved
          </p>
          <p className="made-with">
            Designed & Developed with  by Ikram Ullah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;