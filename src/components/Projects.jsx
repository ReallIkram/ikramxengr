import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronRight, Layers } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Web Interaction System",
      category: "Full Stack",
      shortDesc: "Real-time communication platform with low-latency architecture.",
      longDesc: "A sophisticated real-time chatting application leveraging Socket.io for fluid user experiences. Designed with a focus on secure data handling and a responsive UI that adapts to any device.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2070&auto=format&fit=crop", 
      stack: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
      liveLink: "https://web-interaction-system.vercel.app/", 
      githubLink: "https://github.com/IKRAM-ULLAH-4/Web-Interaction-System.git"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <p className="hero-eyebrow" style={{fontSize:"50px"}}>Portfolio</p>
          <h2 className="section-title">Selected <span>Works</span></h2>
        </div>

        <div className="row g-4 justify-content-center">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="project-card transition-300" onClick={() => setActiveProject(project)}>
                <div className="project-img-container">
                  <img src={project.image} alt={project.title} className="project-img" />
                  <div className="project-hover-overlay">
                    <span className="btn-view-details">Explore Case Study <ChevronRight size={18} /></span>
                  </div>
                </div>
                <div className="project-content">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="project-category">{project.category}</span>
                    <Layers size={16} className="text-accent" />
                  </div>
                  <h4 className="project-name">{project.title}</h4>
                  <p className="project-desc-short">{project.shortDesc}</p>
                  <div className="card-stack-mini">
                    {project.stack.slice(0, 3).map(s => <span key={s}>#{s}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- REFINED MODAL --- */}
      {activeProject && (
        <div className="project-modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)}><X size={24} /></button>
            
            <div className="row g-0 h-100">
              <div className="col-lg-7 overflow-hidden bg-black d-flex align-items-center">
                <img src={activeProject.image} alt={activeProject.title} className="modal-main-img" />
              </div>
              <div className="col-lg-5 modal-text-side">
                <div className="modal-inner-padding">
                  <span className="project-category-badge">{activeProject.category}</span>
                  <h2 className="modal-title">{activeProject.title}</h2>
                  
                  <div className="divider-neon"></div>
                  
                  <p className="modal-desc">{activeProject.longDesc}</p>
                  
                  <div className="stack-container-label">Technologies Used</div>
                  <div className="modal-stack">
                    {activeProject.stack.map(tech => (
                      <span key={tech} className="stack-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="modal-footer-actions">
                    <a href={activeProject.liveLink} target="_blank" rel="noreferrer" className="action-btn-primary">
                      Live Preview <ExternalLink size={16} />
                    </a>
                    <a href={activeProject.githubLink} target="_blank" rel="noreferrer" className="action-btn-outline">
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;