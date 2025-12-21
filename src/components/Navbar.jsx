import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navItems = ['About', 'Skills', 'Experience', 'Education', 'Projects', 'Services', 'Testimonials'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-300 ${scrolled ? 'navbar-scrolled' : 'navbar-custom-initial'}`} data-bs-theme="dark">
      <div className="container"> 
        <a className="navbar-brand brand-hud" href="#hero">
          <span className="accent-code">&lt;</span>
          <span className="brand-name-text">IKRAM ULLAH</span>
          <span className="accent-code">/&gt;</span>
        </a>
        
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-center gap-2"> 
            {navItems.map(item => (
              <li className="nav-item" key={item}> 
                <a className="nav-link nav-link-cyber" href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <a className="nav-cta-pill" href="#contact">Hire Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;