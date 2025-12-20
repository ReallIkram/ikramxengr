import React, { useEffect, useState } from 'react';
import './Hero.css'; // Using the same CSS file for shared variables

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  // Effect to track scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Conditional class: 'navbar-scrolled' is added after 100px of scrolling
    <nav 
      className={`navbar navbar-expand-lg fixed-top py-3 transition-300 ${scrolled ? 'navbar-scrolled' : 'navbar-custom-initial'}`}
    >
      <div className="container-fluid px-lg-5"> 
        
        {/* Brand */}
        <a className="navbar-brand fs-4 fw-light" href="#hero">
          <span className="text-primary">&lt;</span>IKRAM ULLAH<span className="text-primary">/&gt;</span>
        </a>
        
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navCollapse"
          aria-controls="navCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-3"> 
            {navItems.map(item => (
              <li className="nav-item" key={item}> 
                <a 
                  className="nav-link text-uppercase fw-semibold py-2 px-3 transition-300" 
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;