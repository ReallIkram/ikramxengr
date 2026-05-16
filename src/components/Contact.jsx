import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";

const Contact = () => {
  const { bg } = useTheme() || { bg: false };
  const sectionRef = useRef(null);

  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // SHOW FAB ONLY INSIDE CONTACT SECTION
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowWhatsApp(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailTo = "ikrambtm444@gmail.com";

    const emailSubject = encodeURIComponent(
      `Portfolio Contact: ${formData.subject || "Inquiry"}`
    );

    const emailBody = encodeURIComponent(
      `Hello Ikram,\n\n` +
      `You received a new portfolio message.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href =
      `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-5 min-vh-100 d-flex align-items-center position-relative ${
        bg ? "bg-dark text-white" : "bg-light text-dark"
      }`}
      style={{
        transition: "background-color 0.3s ease, color 0.3s ease"
      }}
    >
      <div
        className="container-fluid container-xl px-4"
        style={{ zIndex: 2 }}
      >

        {/* HEADER */}
        <div className="text-center mb-5">
          <span className="text-success fw-bold text-uppercase d-block mb-2">
            Get In Touch
          </span>

          <h2 className="display-5 fw-bold mb-3">
            Contact <span className="text-success">Me</span>
          </h2>

          <div
            className="bg-success mx-auto rounded-pill"
            style={{ width: "60px", height: "4px" }}
          />
        </div>

        <div className="row g-4 justify-content-center align-items-stretch">

          {/* LEFT CARD */}
          <div className="col-12 col-lg-5">

            <div
              className="card h-100 border-0 rounded-4 p-4 p-md-5 shadow-sm"
              style={{
                backgroundColor: bg ? "#1a1d20" : "#ffffff",
                border: bg
                  ? "1px solid #2d3238"
                  : "1px solid #e9ecef",
              }}
            >

              <h4 className={`h4 fw-bold mb-3 ${bg ? "text-white" : "text-dark"}`}>
                Let's discuss a project
              </h4>

              <p className={`mb-5 small ${
                bg ? "text-white-50" : "text-muted"
              }`}>
                Open to freelance work, collaborations, and full-stack
                development opportunities.
              </p>

              {/* CONTACT ITEMS */}
              <div className="d-flex flex-column gap-4">

                {/* EMAIL */}
                <div className="d-flex align-items-center gap-3">

                  <div
                    className="p-3 rounded-circle bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <Mail size={18} />
                  </div>

                  <div>
                    <small className={bg ? "text-white-50 d-block" : "text-muted d-block"}>
                      Email
                    </small>

                    <a
                      href="mailto:ikrambtm444@gmail.com"
                      className="text-success text-decoration-none fw-semibold small"
                    >
                      ikrambtm444@gmail.com
                    </a>
                  </div>
                </div>

                {/* PHONE */}
                <div className="d-flex align-items-center gap-3">

                  <div
                    className="p-3 rounded-circle bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <Phone size={18} />
                  </div>

                  <div>
                    <small className={bg ? "text-white-50 d-block" : "text-muted d-block"}>
                      WhatsApp
                    </small>

                    <span className="fw-semibold small">
                      +92 300 0552293
                    </span>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="d-flex align-items-center gap-3">

                  <div
                    className="p-3 rounded-circle bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <MapPin size={18} />
                  </div>

                  <div>
                    <small className={bg ? "text-white-50 d-block" : "text-muted d-block"}>
                      Location
                    </small>

                    <span className="fw-semibold small">
                      Pakistan
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-12 col-lg-7">

            <form
              onSubmit={handleSubmit}
              className="card h-100 border-0 rounded-4 p-4 p-md-5 shadow-sm"
              style={{
                backgroundColor: bg ? "#1a1d20" : "#ffffff",
                border: bg
                  ? "1px solid #2d3238"
                  : "1px solid #e9ecef",
              }}
            >

              <div className="row g-3">

                <div className="col-12 col-md-6">
                  <label className={`form-label small fw-semibold ${
                    bg ? "text-white-50" : "text-muted"
                  }`}>
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="M Saad"
                    className={`form-control rounded-3 p-3 shadow-none ${
                      bg
                        ? "bg-dark text-white border-secondary"
                        : "bg-light text-dark"
                    }`}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className={`form-label small fw-semibold ${
                    bg ? "text-white-50" : "text-muted"
                  }`}>
                    Your Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="amsaad@example.com"
                    className={`form-control rounded-3 p-3 shadow-none ${
                      bg
                        ? "bg-dark text-white border-secondary"
                        : "bg-light text-dark"
                    }`}
                  />
                </div>

                <div className="col-12">
                  <label className={`form-label small fw-semibold ${
                    bg ? "text-white-50" : "text-muted"
                  }`}>
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className={`form-control rounded-3 p-3 shadow-none ${
                      bg
                        ? "bg-dark text-white border-secondary"
                        : "bg-light text-dark"
                    }`}
                  />
                </div>

                <div className="col-12">
                  <label className={`form-label small fw-semibold ${
                    bg ? "text-white-50" : "text-muted"
                  }`}>
                    Message
                  </label>

                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Let's build something together..."
                    className={`form-control rounded-3 p-3 shadow-none ${
                      bg
                        ? "bg-dark text-white border-secondary"
                        : "bg-light text-dark"
                    }`}
                  />
                </div>

                <div className="col-12 mt-4">
                  <button
                    type="submit"
                    className="btn btn-success rounded-pill px-5 py-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>

      {/* WHATSAPP FAB */}
      {showWhatsApp && (
        <a
          href="https://wa.me/923000552293"
          target="_blank"
          rel="noreferrer"
          className="position-fixed d-flex align-items-center justify-content-center rounded-circle shadow-lg text-decoration-none"
          style={{
            width: "64px",
            height: "64px",
            bottom: "24px",
            right: "24px",
            backgroundColor: "#25D366",
            color: "#fff",
            zIndex: 1050,
            transition: "transform 0.25s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <FaWhatsapp size={34} />
        </a>
      )}

    </section>
  );
};

export default Contact;