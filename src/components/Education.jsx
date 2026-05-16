import React from "react";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";

function Education() {
  const { bg } = useTheme() || { bg: false };

  return (
    <section
      id="education"
      className={`py-5 min-vh-100 d-flex align-items-center ${
        bg ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      style={{
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div className="container-fluid container-xl px-4">

        {/* HEADER */}
        <div className="text-center mb-5 animate-fade-up">
          <span className="text-success fw-bold text-uppercase d-block mb-2">
            Academic Foundation
          </span>

          <h2 className="display-5 fw-bold mb-3">
            My <span className="text-success">Education</span>
          </h2>

          <div className="bg-success mx-auto rounded-pill" style={{ width: "60px", height: "4px" }} />
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">

            <div
              className="card border-0 rounded-4 p-4 p-md-5 shadow-sm position-relative overflow-hidden"
              style={{
                backgroundColor: bg ? "#1a1d20" : "#ffffff",
                border: bg ? "1px solid #2d3238" : "1px solid #e9ecef",
              }}
            >

              {/* ICON */}
              <div className="d-flex flex-column flex-md-row gap-4">

                <div
                  className="d-flex align-items-center justify-content-center rounded-4 bg-success bg-opacity-10 text-success"
                  style={{ width: "64px", height: "64px", flexShrink: 0 }}
                >
                  <GraduationCap size={32} />
                </div>

                {/* CONTENT */}
                <div className="w-100">

                  <div className="d-flex flex-column flex-md-row justify-content-between gap-2 mb-2">

                    <h3 className={`h4 fw-bold mb-0 ${bg ? "text-white" : "text-dark"}`}>
                      BS Software Engineering
                    </h3>

                    <span className={`badge px-3 py-2 small ${
                      bg ? "text-white border border-secondary" : "text-dark bg-light border"
                    }`}>
                      <Calendar size={14} className="text-success me-1" />
                      Sep 2023 — Present
                    </span>

                  </div>

                  <h5 className={`fw-semibold mb-2 ${bg ? "text-white" : "text-dark"}`}>
                    COMSATS University Islamabad
                  </h5>

                  <p className={`d-flex align-items-center gap-2 small mb-3 ${
                    bg ? "text-white-50" : "text-muted"
                  }`}>
                    <MapPin size={14} className="text-success" />
                    Abbottabad Campus, Pakistan
                  </p>

                  <div
                    className="p-3 rounded-3 border"
                    style={{
                      backgroundColor: bg ? "#0f1113" : "#f8f9fa",
                      borderColor: bg ? "#2d3238" : "#e9ecef",
                    }}
                  >
                    <div className="d-flex gap-2 align-items-start">

                      <Award size={16} className="text-success mt-1 flex-shrink-0" />

                      <p className={bg ? "text-white-50 mb-0" : "text-muted mb-0"}>
                        Studying software engineering fundamentals including OOP,
                        data structures, algorithms, and full-stack web development
                        with focus on scalable real-world applications.
                      </p>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;