import React from 'react';
import { GoChevronDown } from "react-icons/go"; // Ensure you have react-icons installed: npm install react-icons
import "./Hero.css";

export default function Hero() {
  return (
    // Uses 'hero' class for 100dvh height and custom styling
    <section id="hero" className="hero">
      <div className="hero-content">
        
        <p className="hero-eyebrow animate__animated animate__fadeInDown">
          Hi, I'm Ikram Ullah
        </p>

        <h1 className="hero-title animate__animated animate__fadeInUp">
          <span>S</span>oftware <span>E</span>ngineer
        </h1>

        <p className="hero-tagline animate__animated animate__fadeInUp animate__delay-1s">
          Building modern web apps, smart contracts, and scalable systems.
        </p>

        <div className="hero-actions animate__animated animate__zoomIn animate__delay-2s">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#about" className="hero-scroll animate__animated animate__bounce animate__infinite">
        <GoChevronDown size={32} />
      </a>
    </section>
  );
}