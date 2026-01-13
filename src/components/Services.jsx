import React from 'react';
import './Services.css';
import { Layout, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: <Layout size={32} />,
      desc: 'Building responsive, high-performance web applications with modern React architectures.',
      tags: ['React', 'Next.js', 'UI/UX']
    },
    {
      title: 'Smart Contracts',
      icon: <ShieldCheck size={32} />,
      desc: 'Developing secure, audited blockchain logic for decentralized applications (dApps).',
      tags: ['Solidity', 'Web3', 'Ethereum']
    },
    {
      title: 'API Development',
      icon: <Cpu size={32} />,
      desc: 'Designing scalable backend systems and RESTful/GraphQL APIs for seamless data flow.',
      tags: ['Node.js', 'Express', 'APIs']
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <p className="hero-eyebrow" style={{fontSize:"40px"}}>Solutions</p>
          <h2 className="section-title">Technical <span>Offerings</span></h2>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
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
                    Inquire Now <ArrowUpRight size={16} className="ms-1" />
                  </span>
                </div>
                
                {/* Decorative background element */}
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