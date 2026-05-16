import React from "react";
import { Briefcase, Calendar, ChevronRight, Terminal } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";

const Experience = () => {
  const { bg } = useTheme() || { bg: false };

  const history = [
    {
      role: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      duration: "2024 - Present",
      bullets: [
        "Designed scalable React frontend systems with reusable components.",
        "Built REST APIs using Node.js and Express with async DB operations.",
        "Improved responsive UI and cross-browser performance."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className={`py-5 min-vh-100 d-flex align-items-center ${
        bg ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      style={{ transition: "background-color 0.3s ease, color 0.3s ease" }}
    >
      <div className="container-fluid container-xl px-4">

        <div className="text-center mb-5 animate-fade-up">
          <span className="text-success fw-bold text-uppercase d-block mb-2">
            Journey
          </span>

          <h2 className="display-5 fw-bold mb-3">
            Work <span className="text-success">Experience</span>
          </h2>

          <div className="bg-success mx-auto rounded-pill" style={{ width: "60px", height: "4px" }} />
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">

            {history.map((job, idx) => (
              <div
                key={idx}
                className="card border-0 rounded-4 p-4 p-md-5 shadow-sm mb-4"
                style={{
                  backgroundColor: bg ? "#1a1d20" : "#ffffff",
                  border: bg ? "1px solid #2d3238" : "1px solid #e9ecef",
                }}
              >

                <div className="d-flex flex-column flex-md-row gap-4">

                  <div className="d-flex align-items-center justify-content-center rounded-4 bg-success bg-opacity-10 text-success"
                    style={{ width: "64px", height: "64px" }}>
                    <Briefcase size={28} />
                  </div>

                  <div className="w-100">

                    <div className="d-flex justify-content-between flex-column flex-md-row gap-2 mb-2">

                      <h3 className={`h4 fw-bold mb-0 ${bg ? "text-white" : "text-dark"}`}>
                        {job.role}
                      </h3>

                      <span className={`badge px-3 py-2 small ${
                        bg ? "text-white border border-secondary" : "text-dark bg-light border"
                      }`}>
                        <Calendar size={12} className="text-success me-1" />
                        {job.duration}
                      </span>

                    </div>

                    <h5 className={`text-success fw-semibold mb-4 d-flex align-items-center gap-2`}>
                      <Terminal size={14} />
                      {job.company}
                    </h5>

                    <ul className="list-unstyled d-flex flex-column gap-3">

                      {job.bullets.map((b, i) => (
                        <li key={i} className="d-flex gap-2">

                          <ChevronRight size={16} className="text-success mt-1 flex-shrink-0" />

                          <span className={bg ? "text-white-50" : "text-muted"}>
                            {b}
                          </span>

                        </li>
                      ))}

                    </ul>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;