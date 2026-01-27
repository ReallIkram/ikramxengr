import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../Context/ThemeContext';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const collapseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    if (window.bootstrap && collapseRef.current) {
      const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(collapseRef.current);
      bsCollapse.hide();
    }
  };

  // const ToggleIcon = () => (
  //   <button className="theme-toggle-btn" onClick={toggleTheme}>
  //     {isDarkMode ? '🌙' : '☀️'}
  //   </button>
  // );

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : 'navbar-custom-initial'}`}>
      <div className="container-fluid px-3 px-sm-4">
        
        <a className="navbar-brand brand-hud" href="#hero">
          <span className="accent-code">&lt;</span>
          <span className="brand-name-text">IKRAM ULLAH</span>
          <span className="accent-code">/&gt;</span>
        </a>

        <div className="d-flex align-items-center gap-2">
          {/* <div className="d-lg-none"><ToggleIcon /></div> */}
          <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div id="navCollapse" className="collapse navbar-collapse" ref={collapseRef}>
          <ul className="navbar-nav ms-auto py-3 py-lg-0 align-items-center gap-1 gap-lg-2">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link nav-link-cyber" href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
              </li>
            ))}

            <li className="nav-item mt-2 mt-lg-0 ps-lg-3 d-flex align-items-center gap-3">
              {/* <div className="d-none d-lg-block"><ToggleIcon /></div> */}
              <a className="nav-cta-pill d-inline-block" href="#contact" onClick={closeMenu}>Hire Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;