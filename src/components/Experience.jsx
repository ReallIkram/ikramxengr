import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineering Student',
      company: 'COMSATS University',
      period: '2023 – Present',
      description:
        'Currently pursuing a Bachelor’s degree in Software Engineering. Gaining hands-on experience through academic projects focused on full-stack development, real-time systems, and mobile application development.',
      tags: ['Programming Fundamentals', 'Data Structures', 'OOP','Web Technologies' , 'Mobile Application Development' , 'AI' ,   'Databases', 'Software Engineering']
    },
    {
      role: 'Academic Project Developer',
      company: 'University & Self-Driven Projects',
      period: '2024 – Present',
      description:
        'Worked on multiple academic-level and personal projects including a real-time chat application using MERN stack, Flutter mobile apps, and Firebase-based systems. These projects focus on practical implementation, scalability, and modern development practices.',
      tags: ['React', 'Node.js', 'Flutter', 'Firebase', 'MongoDB']
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <p className="hero-eyebrow" style={{ fontSize: "20px" }}>My Background</p>
          <h2 className="section-title">Academic & <span>Project Experience</span></h2>
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

                <p className="experience-desc mt-3">{exp.description}</p>

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
