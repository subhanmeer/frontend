/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ logoWidth = "150px", backgroundColor = "#ffffff" }) {
  const navLinks = [
    { path: "/about", text: "Our Story" },
    { path: "/product", text: "Platform" },
    { path: "/pricing", text: "Plans" },
    { path: "/support", text: "Help Center" },
  ];

  const dashboardUrl =
    process.env.REACT_APP_REDIRECT_URL && process.env.REACT_APP_REDIRECT_URL.trim() !== ""
      ? process.env.REACT_APP_REDIRECT_URL
      : "http://localhost:3001";

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor }}
    >
      <div className="container py-2">
        {/* Logo only */}
        <Link className="navbar-brand" to="/" aria-label="Home">
          <img
            src="media/images/logos.svg"
            alt="BazaarX Logo"
            style={{ width: "280px", height: "auto" }}
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links and buttons */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navLinks.map((link, i) => (
              <li key={i} className="nav-item mx-2">
                <Link
                  className={`nav-link ${
                    window.location.pathname === link.path
                      ? "text-primary fw-semibold"
                      : "text-dark"
                  }`}
                  style={{
                    fontSize: "0.95rem",
                    letterSpacing: "0.3px",
                    transition: "all 0.2s ease-in-out",
                  }}
                  to={link.path}
                  onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                  onMouseLeave={(e) =>
                    (e.target.style.color =
                      window.location.pathname === link.path ? "#007bff" : "#212529")
                  }
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth Buttons */}
          <div className="d-flex align-items-center gap-3">
            <Link
              to="/login"
              className="btn btn-outline-primary px-4 py-2 rounded-pill fw-medium"
              style={{
                borderWidth: "1.8px",
                transition: "all 0.3s ease",
              }}
            >
              Login
            </Link>
            <a
              href={dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-4 py-2 rounded-pill text-white fw-medium"
              style={{
                background: "linear-gradient(90deg, #007bff 0%, #0056d2 100%)",
                border: "none",
                boxShadow: "0 2px 8px rgba(0, 123, 255, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow = "0 4px 12px rgba(0, 123, 255, 0.4)")
              }
              onMouseLeave={(e) =>
                (e.target.style.boxShadow = "0 2px 8px rgba(0, 123, 255, 0.3)")
              }
            >
              Dashboard
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
