import React from "react";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

import { useTheme } from "../Context/ThemeContext";

function Skills() {
  const { bg } = useTheme() || { bg: false };

  // UPDATED WITH YOUR ACTUAL SKILLS
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-success fs-3" />,
      description:
        "Building responsive, interactive, and modern web interfaces with clean UI structures.",
      skills: [
        { name: "React.js", level: 92 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Bootstrap", level: 94 },
      ],
    },

    {
      title: "Backend & Databases",
      icon: <FaDatabase className="text-success fs-3" />,
      description:
        "Developing scalable APIs, database structures, and efficient backend systems.",
      skills: [
        { name: "Node.js / Express.js", level: 82 },
        { name: "MongoDB", level: 78 },
        { name: "Firebase", level: 80 },
        { name: "REST APIs", level: 86 },
      ],
    },

    {
      title: "Programming & Tools",
      icon: <FaTools className="text-success fs-3" />,
      description:
        "Using modern development tools and technologies to streamline workflows and deployment.",
      skills: [
        { name: "Java", level: 74 },
        { name: "Flutter", level: 72 },
        { name: "Git & GitHub", level: 90 },
        { name: "Responsive Design", level: 93 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-5 min-vh-100 d-flex align-items-center ${
        bg ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      style={{
        transition:
          "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div className="container-fluid container-xl px-4">

        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-5">

          <span
            className="text-success fw-bold text-uppercase tracking-wider d-block mb-2"
            style={{
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            My Expertise
          </span>

          <h2 className="display-5 fw-extrabold mb-3">
            Technical Skills & Tools
          </h2>

          <div
            className="bg-success mx-auto rounded-pill mb-4"
            style={{
              width: "60px",
              height: "4px",
            }}
          ></div>

          <p
            className={`lead ${
              bg ? "text-white-50" : "text-muted"
            }`}
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            A collection of technologies and development tools I
            use to create scalable, responsive, and modern digital
            experiences.
          </p>

        </div>

        {/* SKILLS GRID */}
        <div className="row g-4 justify-content-center">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4"
            >

              <div
                className="card border-0 rounded-4 p-4 h-100 shadow-sm position-relative overflow-hidden"
                style={{
                  backgroundColor: bg
                    ? "#1a1d20"
                    : "#ffffff",

                  border: bg
                    ? "1px solid #2d3238"
                    : "1px solid #e9ecef",

                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >

                {/* SOFT GREEN GLOW */}
                <div
                  className="position-absolute top-0 end-0"
                  style={{
                    width: "120px",
                    height: "120px",
                    background:
                      "radial-gradient(circle, rgba(25,135,84,0.12) 0%, transparent 70%)",
                    zIndex: 0,
                  }}
                ></div>

                {/* CARD HEADER */}
                <div className="d-flex align-items-center gap-3 mb-3 position-relative">

                  <div
                    className={`p-3 rounded-4 d-flex align-items-center justify-content-center ${
                      bg ? "bg-dark" : "bg-light"
                    }`}
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  >
                    {category.icon}
                  </div>

                  <div>
                    <h3
                      className={`h5 fw-bold mb-1 ${
                        bg ? "text-white" : "text-dark"
                      }`}
                    >
                      {category.title}
                    </h3>

                    <small
                      className={
                        bg
                          ? "text-white-50"
                          : "text-muted"
                      }
                    >
                      Professional Toolkit
                    </small>
                  </div>

                </div>

                {/* DESCRIPTION */}
                <p
                  className={`small mb-4 ${
                    bg ? "text-white-50" : "text-muted"
                  }`}
                  style={{
                    lineHeight: "1.7",
                  }}
                >
                  {category.description}
                </p>

                {/* SKILL ITEMS */}
                <div className="d-flex flex-column gap-4">

                  {category.skills.map((skill, sIndex) => (
                    <div key={sIndex}>

                      <div className="d-flex justify-content-between align-items-center mb-2">

                        <span
                          className={`fw-semibold small d-flex align-items-center gap-2 ${
                            bg ? "text-white" : "text-dark"
                          }`}
                        >
                          <FaCheckCircle
                            size={12}
                            className="text-success"
                          />
                          {skill.name}
                        </span>

                        <span
                          className={`small fw-medium ${
                            bg
                              ? "text-white-50"
                              : "text-muted"
                          }`}
                        >
                          {skill.level}%
                        </span>

                      </div>

                      {/* PROGRESS BAR */}
                      <div
                        className="progress rounded-pill overflow-hidden"
                        style={{
                          height: "7px",
                          backgroundColor: bg
                            ? "#2a2e33"
                            : "#e9ecef",
                        }}
                      >

                        <div
                          className="progress-bar bg-success rounded-pill"
                          role="progressbar"
                          style={{
                            width: `${skill.level}%`,
                            transition:
                              "width 1s ease-in-out",
                          }}
                        ></div>

                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;