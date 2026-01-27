import React from 'react';
import './Services.css';
import { Layout, Smartphone, Cpu, ArrowUpRight, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: <Layout size={32} />,
      desc: 'I build modern, responsive websites and dashboards using React with clean UI and proper structure.',
      tags: ['React', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Mobile App Development',
      icon: <Smartphone size={32} />,
      desc: 'Academic-level Flutter apps including authentication, CRUD systems, and Firebase integration.',
      tags: ['Flutter', 'Firebase', 'Mobile UI']
    },
    {
      title: 'Real-Time Applications',
      icon: <MessageCircle size={32} />,
      desc: 'Developing real-time chat and live data apps using MERN stack and Firebase.',
      tags: ['Node.js', 'Socket.io', 'MongoDB']
    },
    {
      title: 'Backend & APIs',
      icon: <Cpu size={32} />,
      desc: 'Designing REST APIs and backend logic for student projects and portfolio-level applications.',
      tags: ['Node.js', 'Express', 'APIs']
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <p className="hero-eyebrow" style={{ fontSize: "20px" }}>What I Do</p>
          <h2 className="section-title">
            My <span>Technical Skills</span>
          </h2>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="service-card transition-300">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>

                <div className="service-tags">
                  {service.tags.map(tag => (
                    <span key={tag} className="s-tag">{tag}</span>
                  ))}
                </div>

                <div className="service-footer mt-4">
                  <span className="learn-more">
                    Learn More <ArrowUpRight size={16} className="ms-1" />
                  </span>
                </div>

                <div className="service-number">{`0${index + 1}`}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
