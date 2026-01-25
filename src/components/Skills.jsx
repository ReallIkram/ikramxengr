import React from 'react';
import { 
  Code2, 
  Globe, 
  Cpu, 
  Layers, 
  Database, 
  Coffee, 
  ShieldCheck, 
  Layout 
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <Globe size={24} /> },
    { name: 'CSS', icon: <Layout size={24} /> },
    { name: 'JavaScript', icon: <Code2 size={24} /> },
    { name: 'React', icon: <Layers size={24} /> },
    { name: 'Node.js', icon: <Cpu size={24} /> },
    { name: 'Java', icon: <Coffee size={24} /> },
    { name: 'Solidity', icon: <ShieldCheck size={24} /> },
    { name: 'Bootstrap', icon: <Database size={24} /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <p className="hero-eyebrow" style={{fontSize:"20px"}}>Expertise</p>
          <h2 className="section-title">Technical <span>Toolkit</span></h2>
        </div>
        
        <div className="row g-4 justify-content-center">
          {skills.map((skill) => (
            <div className="col-lg-3 col-md-4 col-6" key={skill.name}>
              <div className="skill-card transition-300">
                <div className="skill-glow"></div>
                <div className="skill-content">
                  <div className="skill-icon-wrapper mb-3">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;