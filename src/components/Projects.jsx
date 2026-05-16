import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X, ChevronRight, Layers, Monitor, Terminal } from 'lucide-react';
import { useTheme } from "../Context/ThemeContext";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const { bg } = useTheme() || { bg: false };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeProject]);

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
    <section 
      id="projects" 
      className={`py-5 min-vh-100 d-flex align-items-center ${
        bg ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      style={{ transition: "background-color 0.3s ease, color 0.3s ease" }}
    >
      <div className="container-fluid container-xl px-4">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-5 animate-fade-up">
          <span className="text-success fw-bold text-uppercase tracking-wider d-block mb-2 style-eyebrow">
            Portfolio
          </span>
          <h2 className="display-5 fw-extrabold mb-3">
            Selected <span className="text-success">Works</span>
          </h2>
          <div className="bg-success mx-auto rounded-pill" style={{ width: "60px", height: "4px" }}></div>
        </div>

        {/* PROJECTS GRID */}
        <div className="row g-4 justify-content-center">
          {projects.map((project) => (
            <div className="col-12 col-md-6 col-lg-6" key={project.id}>
              <div 
                className={`card h-100 overflow-hidden border-0 rounded-4 shadow-sm portfolio-custom-card ${
                  bg ? "bg-gradient-dark text-white" : "bg-white text-dark"
                }`}
                style={{
                  backgroundColor: bg ? '#1a1d20' : '#ffffff',
                  border: bg ? '1px solid #2d3238' : '1px solid #e9ecef',
                }}
                onClick={() => setActiveProject(project)}
              >
                {/* WINDOW LEAN PREVIEW */}
                <div 
                  className="position-relative overflow-hidden w-100 d-flex align-items-center justify-content-center project-window-header"
                  style={{ backgroundColor: bg ? '#0f1113' : '#f1f3f5' }}
                >
                  {/* Browser Controls */}
                  <div className="position-absolute top-0 start-0 m-3 d-flex gap-2">
                    <span className="dot bg-danger"></span>
                    <span className="dot bg-warning"></span>
                    <span className="dot bg-success"></span>
                  </div>

                  <div className="text-center p-4 d-flex flex-column align-items-center gap-2">
                    <Terminal size={40} className="text-success opacity-70 mb-2" />
                    <code className="text-success small">{`${project.title.toLowerCase().replace(/\s+/g, '-')}`}</code>
                  </div>
                  
                  {/* HOVER HOOD */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center portfolio-card-overlay text-white">
                    <span className="btn btn-success rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2 shadow-sm">
                      View Case Study <ChevronRight size={16} />
                    </span>
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="card-body d-flex flex-column p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-1 fw-bold">
                      {project.category}
                    </span>
                    <Layers size={16} className="text-success opacity-75" />
                  </div>
                  <h4 className="card-title fw-bold mb-2">{project.title}</h4>
                  <p className={`card-text small mb-4 opacity-75 ${bg ? 'text-light' : 'text-muted'}`}>
                    {project.shortDesc}
                  </p>
                  
                  {/* TECH PILLS */}
                  <div className="d-flex flex-wrap gap-2 mt-auto">
                    {project.stack.slice(0, 4).map(s => (
                      <span 
                        key={s} 
                        className={`badge rounded-pill fw-medium px-2 py-1 ${
                          bg ? "bg-dark text-light border border-secondary" : "bg-light text-dark border border-muted"
                        }`}
                        style={{ fontSize: '0.7rem' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CASE STUDY MODAL */}
      {activeProject && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3 portfolio-modal-wrapper animate-fade-in-quick"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className={`card w-100 border-0 rounded-4 overflow-hidden shadow-lg animate-scale-up ${
              bg ? "bg-dark text-white" : "bg-white text-dark"
            }`} 
            style={{ 
              maxWidth: "1100px", 
              height: "85vh",
              backgroundColor: bg ? '#1a1d20' : '#ffffff'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button 
              className={`btn position-absolute top-0 end-0 m-3 z-3 rounded-circle d-flex align-items-center justify-content-center p-2 ${
                bg ? "btn-secondary text-white" : "btn-light text-dark"
              }`}
              style={{ width: '40px', height: '40px' }}
              onClick={() => setActiveProject(null)}
            >
              <X size={20} />
            </button>

            <div className="row g-0 h-100">
              {/* DESKTOP MODAL PREVIEW IFRAME */}
              <div 
                className={`col-lg-7 bg-black d-none d-lg-block position-relative h-100 border-end ${
                  bg ? "border-secondary" : "border-muted"
                }`}
              >
                <div 
                  className={`position-absolute top-0 start-0 w-100 px-3 py-2 d-flex align-items-center gap-2 border-bottom`} 
                  style={{ 
                    zIndex: 10,
                    backgroundColor: bg ? '#0f1113' : '#f1f3f5',
                    borderColor: bg ? '#2d3238' : '#e9ecef'
                  }}
                >
                  <Monitor size={14} className="text-success" />
                  <small className={`font-monospace text-truncate fs-7 ${bg ? "text-light opacity-50" : "text-dark opacity-50"}`}>
                    {activeProject.liveLink}
                  </small>
                </div>
                <iframe
                  src={activeProject.liveLink}
                  title="Full Case Preview"
                  className="w-100 h-100 border-0 pt-4"
                />
              </div>

              {/* DETAILS SIDE PANEL */}
              <div className="col-12 col-lg-5 h-100 overflow-y-auto">
                <div className="p-4 p-md-5 d-flex flex-column h-100 justify-content-center">
                  <div className="mb-2">
                    <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-1 fw-bold">
                      {activeProject.category}
                    </span>
                  </div>

                  <h2 className="h2 fw-extrabold mb-3">{activeProject.title}</h2>
                  <div className="bg-success rounded mb-4" style={{ width: "40px", height: "4px" }}></div>
                  <p className={`lead fs-6 mb-4 ${bg ? "text-light opacity-75" : "text-muted"}`} style={{ lineHeight: "1.6" }}>
                    {activeProject.longDesc}
                  </p>

                  <div className="fw-bold mb-2 text-uppercase tracking-wider small opacity-75">Technologies Used</div>
                  <div className="d-flex flex-wrap gap-2 mb-5">
                    {activeProject.stack.map(tech => (
                      <span 
                        key={tech} 
                        className={`badge rounded-pill px-3 py-2 fw-semibold ${
                          bg ? "bg-dark text-light border border-secondary" : "bg-light text-dark border border-muted"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="d-flex flex-column flex-sm-row gap-3 mt-auto">
                    <a
                      href={activeProject.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-success rounded-pill px-4 py-2.5 fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm flex-grow-1"
                    >
                      Live Website <ExternalLink size={16} />
                    </a>

                    <a
                      href={activeProject.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn rounded-pill px-4 py-2.5 fw-bold d-flex align-items-center justify-content-center gap-2 flex-grow-1 ${
                        bg ? "btn-outline-light" : "btn-outline-dark"
                      }`}
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