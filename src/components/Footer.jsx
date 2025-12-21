import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import './Footer.css';
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          {/* Scroll to Top Circle */}
          <button className="scroll-top-btn mb-4" onClick={scrollToTop}>
            <ArrowUp size={20} />
          </button>

          <div className="footer-links mb-4">
            <a href="https://github.com/yourusername" className="footer-social-link"><Github size={18} /></a>
            <a href="https://linkedin.com/in/yourusername" className="footer-social-link"><Linkedin size={18} /></a>
            <a href="mailto:ikrambtm444@gmail.com" className="footer-social-link"><Mail size={18} /></a>
          </div>

          <div className="footer-info">
            <p className="footer-copyright">
              © {new Date().getFullYear()} <span className="text-accent">Ikram Ullah</span>. Engineered with Passion.
            </p>
            <small className="footer-motto">Building the future of Web3 & Software Engineering.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;