/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Link } from "react-router-dom";

function Navbar({ logoWidth = "50%", backgroundColor = "#FFF" }) {
  const navLinks = [
    { path: "/about", text: "Our Story" },
    { path: "/product", text: "Platform" },
    { path: "/pricing", text: "Plans" },
    { path: "/support", text: "Help Center" },
  ];
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor }}
      aria-label="Main navigation"
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/" aria-label="Home">
          <img
            class="logo"
            src="media/images/logos.svg"
            style={{ width: logoWidth }}
            alt="Company Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <Link 
                  className="nav-link" 
                  to={link.path}
                  aria-current={window.location.pathname === link.path ? "page" : undefined}
                >
                  {link.text}
                </Link>
              </li>
            ))}
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
