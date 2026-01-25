import React from 'react';
import './Experience.css';
const Experience = () => {
  const experiences = [
    {
      role: 'Intern / Junior Developer',
      company: 'KWIS - knowledge Web Innovative Soln.', // Example company
      period: '2024 – Present',
      description: 'Worked on web apps, APIs, and blockchain experiments using React and Solidity.',
      tags: ['React', 'Node.js', 'Web3']
    },
    // You can add more objects here later
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <p className="hero-eyebrow"style={{fontSize:"20px"}}>Career Path</p>
          <h2 className="section-title">My <span>Experience</span></h2>
        </div>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="glass-card experience-card transition-300">
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                  <div>
                    <h5 className="role-title">{exp.role}</h5>
                    <p className="company-name text-accent">{exp.company}</p>
                  </div>
                  <span className="badge-period">{exp.period}</span>
                </div>
                
                <p className="experience-desc mt-3">
                  {exp.description}
                </p>

                <div className="experience-tags mt-3">
                  {exp.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;