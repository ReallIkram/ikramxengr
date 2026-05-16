import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/IkramUllah.jpg";
import { useTheme } from "../Context/ThemeContext";
import { Link } from "react-router-dom";

function Navbar() {
  // Safe destructuring with fallback to prevent undefined crashes
  const { bg, setbg } = useTheme() || { bg: false, setbg: () => {} };

  const changeTheme = () => {
    setbg(!bg);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top shadow-sm px-3 py-2 transition-all ${
        bg ? "navbar-dark bg-dark" : "navbar-light bg-white"
      }`}
      style={{ transition: "background-color 0.3s ease, color 0.3s ease" }}
    >
      <div className="container-fluid container-xl">
        
        {/* BRAND / LOGO AREA */}
        <a
          className="navbar-brand d-flex align-items-center gap-2 fw-bold text-decoration-none"
          href="#"
        >
          <img
            src={logo}
            alt="Ikram Ullah Logo"
            width="42"
            height="42"
            className="rounded-circle object-fit-cover border"
            style={{ borderColor: bg ? "#444" : "#ddd" }}
          />
          <div className="d-flex flex-column lh-1">
            <span className="fs-5 tracking-tight">Ikram Ullah</span>
            <small
              className={`fw-normal fs-7 ${
                bg ? "text-light opacity-75" : "text-muted"
              }`}
            >
              Software Engineer
            </small>
          </div>
        </a>

        {/* MOBILE ACTIONS CONTAINER (Keeps theme switch next to burger icon on mobile) */}
        <div className="d-flex align-items-center gap-2 d-lg-none ms-auto me-2">
          <button
            type="button"
            onClick={changeTheme}
            className={`btn rounded-circle d-flex align-items-center justify-content-center border-0 ${
              bg ? "btn-outline-light text-warning" : "btn-outline-dark text-primary"
            }`}
            style={{ width: "38px", height: "38px" }}
            aria-label="Toggle theme"
          >
            {bg ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        {/* MOBILE HAMBURGER TOGGLE */}
        <button
          className="navbar-toggler border-0 shadow-none p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
          aria-controls="portfolioNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSIBLE NAVBAR CONTENT */}
        <div className="collapse navbar-collapse" id="portfolioNavbar">
          
          {/* CENTERED NAV LINKS */}
          <ul className="navbar-nav mx-auto mb-3 mb-lg-0 gap-1 gap-lg-3 pt-3 pt-lg-0 text-center text-lg-start">
            <li className="nav-item">
              <Link className="nav-link active fw-semibold px-3 py-2 rounded" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold px-3 py-2 rounded" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold px-3 py-2 rounded" href="#">
                Security
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold px-3 py-2 rounded" to={'/aboutme'}>
                About Me
              </Link>
            </li>
          </ul>

          {/* RIGHT SIDE ACTIONS */}
          <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-3">
            
            {/* RESPONSIVE SEARCH BAR */}
            <form className="d-flex position-relative mx-auto mx-lg-0 w-100" role="search" style={{ maxWidth: "300px" }}>
              <input
                className={`form-control pe-5 rounded-pill shadow-none ${
                  bg ? "bg-secondary text-white border-0" : "bg-light text-dark"
                }`}
                type="search"
                placeholder="Search projects..."
                aria-label="Search"
              />
              <button
                className="btn btn-success rounded-pill position-absolute end-0 top-0 bottom-0 px-3 z-3 h-100 d-flex align-items-center"
                type="submit"
                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                Go
              </button>
            </form>

            {/* DESKTOP THEME BUTTON (Hidden on Mobile) */}
            <button
              type="button"
              onClick={changeTheme}
              className={`btn rounded-circle d-none d-lg-flex align-items-center justify-content-center shadow-sm border ${
                bg ? "btn-dark border-secondary text-warning" : "btn-light border-muted"
              }`}
              style={{
                width: "42px",
                height: "42px",
                transition: "transform 0.2s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.08)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              aria-label="Toggle theme"
            >
              {bg ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;