import React from "react";
import { Code2, Brain, Sparkles } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import me from "../assets/IkramUllah.jpg";

const AboutIntro = () => {
  const { bg } = useTheme() || { bg: false };

  return (
    <section
      id="about-intro"
      className={`py-5 min-vh-100 d-flex align-items-center ${
        bg ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      style={{ transition: "background-color 0.3s ease, color 0.3s ease" }}
    >
      <div className="container-fluid container-xl px-4">

        <div className="text-center mb-5 animate-fade-up">
          <span className="text-success fw-bold text-uppercase d-block mb-2">
            Introduction
          </span>

          <h2 className="display-5 fw-bold mb-3">
            About <span className="text-success">Me</span>
          </h2>

          <div className="bg-success mx-auto rounded-pill" style={{ width: "60px", height: "4px" }} />
        </div>

        <div className="row g-5 align-items-center">

          <div className="col-12 col-lg-5">
            <div
              className="card border-0 rounded-4 p-5 text-center position-relative overflow-hidden shadow-sm"
              style={{
                backgroundColor: bg ? "#1a1d20" : "#ffffff",
                border: bg ? "1px solid #2d3238" : "1px solid #e9ecef",
              }}
            >

              <div className="mx-auto mb-4">
                <img
                  src={me}
                  alt="Ikram Ullah"
                  className="rounded-circle border border-success"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
              </div>

              <h3 className={`h4 fw-bold mb-1 ${bg ? "text-white" : "text-dark"}`}>
                Ikram Ullah
              </h3>

              {/* FIXED */}
              <p className="text-success small fw-semibold text-uppercase mb-3">
                Software Engineer & Full-Stack Developer
              </p>

              <div className="d-flex justify-content-center gap-2 flex-wrap">

                <span className={`badge rounded-pill px-3 py-2 small ${
                  bg ? "text-white border border-secondary" : "text-dark bg-light border"
                }`}>
                  <Code2 size={12} className="me-1 text-success" />
                  Builder
                </span>

                <span className={`badge rounded-pill px-3 py-2 small ${
                  bg ? "text-white border border-secondary" : "text-dark bg-light border"
                }`}>
                  <Brain size={12} className="me-1 text-success" />
                  Thinker
                </span>

              </div>

            </div>
          </div>

          <div className="col-12 col-lg-7">

            <div className="d-flex align-items-center gap-2 mb-3">
              <Sparkles className="text-success" size={20} />
              <h4 className={`h4 fw-bold mb-0 ${bg ? "text-white" : "text-dark"}`}>
                Who Am I?
              </h4>
            </div>

            <p className={`fs-6 mb-4 ${bg ? "text-white-50" : "text-muted"}`} style={{ lineHeight: "1.8" }}>
              I am a passionate Software Engineering student and full-stack developer focused on building modern, scalable, and polished digital solutions.
            </p>

            <p className={`fs-6 mb-5 ${bg ? "text-white-50" : "text-muted"}`} style={{ lineHeight: "1.8" }}>
              I focus on writing clean code, improving performance, and building intuitive user experiences.
            </p>

            <div className="row g-3">

              <div className="col-12 col-sm-6">
                <h6 className={`fw-bold mb-1 ${bg ? "text-white" : "text-dark"}`}>
                  Clean Architecture
                </h6>
                <small className={bg ? "text-white-50" : "text-muted"}>
                  Modular, scalable systems
                </small>
              </div>

              <div className="col-12 col-sm-6">
                <h6 className={`fw-bold mb-1 ${bg ? "text-white" : "text-dark"}`}>
                  Problem Solver
                </h6>
                <small className={bg ? "text-white-50" : "text-muted"}>
                  Logical real-world solutions
                </small>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;