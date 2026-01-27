import React from 'react';
import { GoChevronDown } from "react-icons/go";
import Typewriter from 'typewriter-effect'; // 1. Import the typewriter
import "./Hero.css";
import profileImg from '../assets/IkramUllah.jpg'; 

export default function Hero() {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center gy-5">
          
          <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
            <div className="hero-content">
              <p className="hero-eyebrow animate__animated animate__fadeInDown" style={{fontSize:"30px"}}>
                Hi, I'm Ikram Ullah
              </p>

              {/* 2. Typewriter inside the H1 */}
              <h1 className="hero-title animate__animated animate__fadeInLeft">
                <Typewriter
                  options={{
                    strings: [
                      'Software Engineer',
                      'Full-Stack Developer',
                      // 'Blockchain Architect',
                      // 'Web3 Specialist'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </h1>

              <p className="hero-tagline animate__animated animate__fadeInLeft animate__delay-1s">
                Building modern web apps, smart contracts, and scalable systems.
              </p>

              <div className="hero-actions animate__animated animate__fadeInUp animate__delay-2s justify-content-center justify-content-lg-start">
                <a href="#projects" className="btn-primary">View My Work</a>
                <a href="#contact" className="btn-outline">Get In Touch</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2 text-center">
            <div className="hero-photo-container animate__animated animate__zoomIn animate__delay-1s">
               <img src={profileImg} alt="Ikram Ullah" className="img-fluid hero-photo" />
            </div>
          </div>

        </div>
      </div>

      <a href="#about" className="hero-scroll animate__animated animate__bounce animate__infinite">
        <GoChevronDown size={32} />
      </a>
    </section>
  );
}