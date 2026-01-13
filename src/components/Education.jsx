import React from 'react';
import './Education.css';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <p className="hero-eyebrow" style={{fontSize:"40px"}}>Academic Foundation</p>
          <h2 className="section-title">My <span>Education</span></h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="education-card transition-300">
              <div className="education-glow"></div>
              
              <div className="education-content">
                <div className="edu-icon-box">
                  <GraduationCap size={32} />
                </div>
                
                <div className="edu-details">
                  <h3 className="degree-name">BS Software Engineering</h3>
                  <h4 className="university-name">COMSATS University Islamabad</h4>
                  <p className="campus-info">
                    <MapPin size={14} className="me-1 text-accent" /> 
                    Abbottabad Campus
                  </p>
                  
                  <div className="edu-meta mt-4">
                    <span className="edu-date">
                      <Calendar size={14} className="me-2" />
                      Sep 2023 — Present
                    </span>
                    <span className="edu-status ms-md-3">Active Student</span>
                  </div>

                  <div className="edu-highlights mt-4">
                    <p className="text-muted small mb-0">
                      Focusing on core software engineering principles, clean code, and emerging technologies.
                    </p>
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

export default Education;