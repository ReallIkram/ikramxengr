import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronRight, Layers } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Web Interaction System",
      category: "Real-Time Full Stack App",
      shortDesc: "Low-latency real-time chat system built using Socket.io and modern web stack.",
      longDesc:
        "Web Interaction System is a real-time messaging platform designed for speed, reliability, and scalability. It uses Socket.io to enable instant communication, secure message delivery, and smooth UI updates. The project demonstrates full-stack architecture including frontend, backend, and WebSocket communication.",
      liveLink: "https://kwick-web-interaction.vercel.app/",
      githubLink: "https://github.com/IKRAM-ULLAH-4/Web-Interaction-System.git",
      stack: ["React", "Node.js", "Socket.io", "Express", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Crypto Infinity",
      category: "Web3 Marketing Platform",
      shortDesc: "Professional crypto marketing agency website built to generate leads and build Web3 trust.",
      longDesc:
        "Crypto Infinity is a modern Web3 marketing agency platform created to help blockchain startups grow. It includes conversion-optimized layouts, branding, service pages, and SEO-friendly structure. The platform is designed to build authority, capture leads, and turn crypto projects into paying clients.",
      liveLink: "https://cryptoinfinity.space",
      githubLink: "https://github.com/IKRAM-ULLAH-4/crypto-infinity0.git",
      stack: ["React", "Vite", "Tailwind CSS", "Vercel", "SEO"],
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <p className="hero-eyebrow" style={{ fontSize: "20px" }}>Portfolio</p>
          <h2 className="section-title">Selected <span>Works</span></h2>
        </div>

        <div className="row g-4 justify-content-center">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="project-card transition-300" onClick={() => setActiveProject(project)}>
                <div className="project-img-container">
                  <div className="live-preview-wrapper">
                    <iframe
                      src={project.liveLink}
                      title="Live Preview"
                      className="preview-iframe"
                      scrolling="no"
                    />
                    <div className="iframe-shield"></div>
                  </div>

                  <div className="project-hover-overlay">
                    <span className="btn-view-details">
                      View Case Study <ChevronRight size={18} />
                    </span>
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
                    {project.stack.slice(0, 4).map(s => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="project-modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)}>
              <X size={24} />
            </button>

            <div className="row g-0 h-100">
              <div className="col-lg-7 bg-black overflow-hidden">
                <div className="modal-preview-wrapper">
                  <iframe
                    src={activeProject.liveLink}
                    title="Project Preview"
                    className="modal-iframe"
                  />
                </div>
              </div>

              <div className="col-lg-5 modal-text-side">
                <div className="modal-inner-padding">
                  <span className="project-category-badge">
                    {activeProject.category}
                  </span>

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
                    <a
                      href={activeProject.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="action-btn-primary"
                    >
                      Live Website <ExternalLink size={16} />
                    </a>

                    <a
                      href={activeProject.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="action-btn-outline"
                    >
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
