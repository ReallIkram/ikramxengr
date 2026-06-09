import React from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaArrowRight, FaCode, FaDownload } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";
import heroImage from "../assets/IkramUllah.jpg";
import IkramPhoto from '../assets/IkramPhoto.jpeg'
import IkramO from '../assets/IkramO.png'

function Hero() {
  const { bg } = useTheme() || { bg: false };

  return (
    <section
      className={`d-flex align-items-center justify-content-center min-vh-100 py-5 overflow-hidden ${
        bg ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      style={{ transition: "background-color 0.3s ease, color 0.3s ease" }}
    >
      <div className="container-fluid container-xl px-4">
        <div className="row align-items-center gy-5">

          {/* LEFT SIDE */}
          <div className="col-12 col-lg-7 text-center text-lg-start">

            {/* BADGE */}
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4 border shadow-sm bg-body">
              <FaCode className="text-success" />
              <span className="fw-semibold text-dark">
                Open for opportunities
              </span>
            </div>

            {/* NAME */}
            <h1 className="display-3 fw-bold mb-3">
              Hi, I'm <span className="text-success">Ikram Ullah</span>
            </h1>

            {/* TYPEWRITER LINE */}
            <h2 className={`h1 fw-semibold mb-4 ${bg ? "text-white-50" : "text-muted"}`}>
              <Typewriter
                options={{
                  loop: true,
                  delay: 60,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Building web applications that feel fast and modern")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Turning ideas into clean, scalable code")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Focused on React, Node.js & system design")
                    .pauseFor(1500)
                    .start();
                }}
              />
            </h2>

            {/* DESCRIPTION (more natural tone) */}
            <p className="lead mb-5" style={{ lineHeight: "1.7" }}>
              I build responsive web applications using modern frontend and backend technologies.
              My focus is on clean architecture, performance, and user-focused design.
            </p>

            {/* CTA */}
            <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
              <a
                href="#projects"
                className="btn btn-success btn-lg rounded-pill px-4 py-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
              >
                View Projects <FaArrowRight size={15} />
              </a>

              <a
                href="#resume"
                className={`btn btn-lg rounded-pill px-4 py-3 fw-semibold border d-flex align-items-center justify-content-center gap-2 ${
                  bg ? "btn-outline-light" : "btn-outline-dark"
                }`}
              >
                Resume <FaDownload size={14} />
              </a>
            </div>

            {/* SOCIAL */}
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4">
              <a href="https://github.com/IKRAM-ULLAH-4 " className={bg ? "text-white-50" : "text-dark"} target="_blank">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/ikram-ullah-416b74232?utm_source=share_via&utm_content=profile&utm_medium=member_android" className={bg ? "text-white-50" : "text-dark"} target="_blank">
                <FaLinkedin size={22} />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-12 col-lg-5 d-flex justify-content-center position-relative">

            <div
              className="position-absolute rounded-circle opacity-25 start-50 top-50 translate-middle"
              style={{
                width: "120%",
                height: "120%",
                background: "radial-gradient(circle, #198754 0%, transparent 70%)",
              }}
            />

            <img
              src={IkramO}
              alt="profile"
              className={`img-fluid rounded-4 shadow-lg border ${
                bg ? "border-secondary" : "border-white"
              }`}
              style={{
                maxWidth: "380px",
                transform: "rotate(-2deg)",
                transition: "0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.04) rotate(0deg)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "rotate(-2deg)")
              }
            />

          </div>

        </div>
      </div>  
    </section>
  );
}

export default Hero;