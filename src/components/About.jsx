import React from 'react';
import { FaCode, FaCube, FaShieldAlt } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container py-lg-5">
        <div className="row align-items-center">
          
          {/* Left Side: Narrative */}
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <p className="hero-eyebrow mb-2">My Mission</p>
            <h2 className="display-4 fw-bold text-white mb-4">
              Engineering <span className="text-secondary">Scalable</span> & Secure Solutions
            </h2>
            <p className="lead text-white-50 mb-4">
              I am currently enrolled as a Software Engineering student at COMSATS University 
              (2023 – 2027), specializing in building the bridge between traditional high-performance 
              systems and the decentralized future of Web3.
            </p>
            {/* <p className="text-white-50 mb-5">
              My approach focuses on clean, modular code. I don’t just build applications; I architect 
              systems designed for scalability, security, and long-term growth, with readiness for 
              complex blockchain integrations.
            </p> */}
            
            {/* Quick Stats/Highlights */}
            <div className="d-flex align-items-center stats-row">
              <div className="stats-box me-4">
                <h3 className="text-secondary fw-bold mb-0">Web3</h3>
                <small className="text-uppercase text-white-50">Focus Area</small>
              </div>
              <div className="stats-box border-start ps-4">
                <h3 className="text-primary fw-bold mb-0">Full-Stack</h3>
                <small className="text-uppercase text-white-50">Development</small>
              </div>
            </div>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="row g-4">
              
              <div className="col-12">
                <div className="about-card p-4">
                  <div className="d-flex align-items-start">
                    <FaCode className="about-card-icon me-3" />
                    <div>
                      <h5 className="text-white fw-bold">Clean Code Architecture</h5>
                      <p className="text-white-50 mb-0 small">
                        Writing maintainable, production-ready code that scales with real-world 
                        system demands.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-12">
                <div className="about-card p-4 accent-border">
                  <div className="d-flex align-items-start">
                    <FaCube className="about-card-icon me-3" />
                    <div>
                      <h5 className="text-white fw-bold">Blockchain & Smart Contracts</h5>
                      <p className="text-white-50 mb-0 small">
                        Developing secure Solidity smart contracts and decentralized applications 
                        with an emphasis on efficiency and gas optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="about-card p-4">
                  <div className="d-flex align-items-start">
                    <FaShieldAlt className="about-card-icon me-3" />
                    <div>
                      <h5 className="text-white fw-bold">System Reliability</h5>
                      <p className="text-white-50 mb-0 small">
                        Designing systems with security, reliability, and high availability as 
                        first-class priorities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
