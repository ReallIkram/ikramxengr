import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const collapseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    if (window.bootstrap && collapseRef.current) {
      const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(
        collapseRef.current
      );
      bsCollapse.hide();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? 'navbar-scrolled' : 'navbar-custom-initial'
      }`}
      data-bs-theme="dark"
    >
      {/* container-fluid prevents mobile overflow */}
      <div className="container-fluid px-3 px-sm-4">

        <a className="navbar-brand brand-hud" href="#hero">
          <span className="accent-code">&lt;</span>
          <span className="brand-name-text">IKRAM ULLAH</span>
          <span className="accent-code">/&gt;</span>
        </a>

        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navCollapse"
          aria-controls="navCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navCollapse"
          className="collapse navbar-collapse"
          ref={collapseRef}
        >
          <ul className="navbar-nav ms-auto py-3 py-lg-0 gap-1 gap-lg-2">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map(
              (item) => (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link nav-link-cyber"
                    href={`#${item.toLowerCase()}`}
                    onClick={closeMenu}
                  >
                    {item}
                  </a>
                </li>
              )
            )}

            <li className="nav-item mt-2 mt-lg-0 ps-lg-3">
              <a
                className="nav-cta-pill d-inline-block"
                href="#contact"
                onClick={closeMenu}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
