import React from "react";
import { Link } from "react-router-dom";

function OpenAccount({
  title = "Start Investing with BazaarX Today",
  description = "Pakistan's most trusted trading platform with PKR 0 equity delivery and flat PKR 20 intraday & F&O trades. SECP regulated and Shariah-compliant options available.",
  ctaText = "Open Free Account",
  ctaLink = "/signup",
}) {
  return (
    <div className="container-fluid py-5 mb-5 bg-accent text-white">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="display-5 fw-bold mb-4">{title}</h1>
            <p className="lead mb-5">{description}</p>
            <Link to={ctaLink}>
              <button
                className="btn btn-light btn-lg px-5 py-3 text-primary fw-bold"
                style={{
                  borderRadius: "8px",
                  minWidth: "250px",
                  boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)",
                }}
              >
                {ctaLink}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
