import React from 'react';
import { FaCode, FaMobileAlt, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container py-lg-5">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <p className="hero-eyebrow mb-2">About Me</p>
            <h2 className="display-4 fw-bold text-white mb-4">
              Building <span className="text-secondary">Scalable</span> Web, Mobile & Web3 Systems
            </h2>

            <p className="lead text-white-50 mb-4">
              I am a Software Engineering student at COMSATS University (2023–2027) and a full-stack
              developer specializing in the MERN stack, Flutter, and Firebase. I build high-performance
              web platforms and mobile applications that are secure, scalable, and production-ready.
            </p>

            <p className="text-white-50 mb-5">
              From real-time web applications to cross-platform mobile apps and Web3-enabled systems,
              I focus on writing clean architecture, scalable APIs, and modern UI experiences that
              power startups and digital products.
            </p>

            <div className="d-flex align-items-center stats-row justify-content-lg-start justify-content-center">
              <div className="stats-box me-4">
                <h3 className="fw-bold mb-0">MERN</h3>
                <small className="text-uppercase text-white-50">Web Stack</small>
              </div>
              <div className="stats-box border-start ps-4">
                <h3 className="fw-bold mb-0">Flutter</h3>
                <small className="text-uppercase text-white-50">Mobile Apps</small>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="row g-4">

              <div className="col-12">
                <div className="about-card p-4">
                  <div className="d-flex align-items-start">
                    <FaCode className="about-card-icon me-3" />
                    <div>
                      <h5 className="text-white fw-bold">MERN Stack Engineering</h5>
                      <p className="text-white-50 mb-0 small">
                        Building scalable React frontends, Node.js APIs, and MongoDB-powered
                        backends for modern SaaS and real-time applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="about-card p-4 accent-border">
                  <div className="d-flex align-items-start">
                    <FaMobileAlt className="about-card-icon me-3" />
                    <div>
                      <h5 className="text-white fw-bold">Flutter Mobile Apps</h5>
                      <p className="text-white-50 mb-0 small">
                        Developing fast, beautiful cross-platform mobile apps for Android and iOS
                        using Flutter with clean UI and optimized performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="about-card p-4">
                  <div className="d-flex align-items-start">
                    <FaDatabase className="about-card-icon me-3" />
                    <div>
                      <h5 className="text-white fw-bold">Firebase & Cloud Backend</h5>
                      <p className="text-white-50 mb-0 small">
                        Using Firebase Auth, Firestore, Cloud Functions, and Storage to power
                        real-time, secure, and scalable mobile and web applications.
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
                      <h5 className="text-white fw-bold">Security & Reliability</h5>
                      <p className="text-white-50 mb-0 small">
                        Designing systems with authentication, role-based access, data security,
                        and performance as first-class priorities.
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
