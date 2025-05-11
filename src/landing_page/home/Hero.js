import React from "react";
import { Link } from "react-router-dom";

function Hero({
  title = "Invest with Confidence in Pakistan's Markets",
  subtitle = "Pakistan's premier online platform for stocks, ETFs, and Sukuk investments",
  ctaText = "Open Free Account",
  imagePath = "media/images/homeHero.png",
  ctaLink = "/signup",
}) {
  return (
    <div className="container py-5 my-3">
      <div className="row text-center">
        <div className="col-12 mb-4">
          <img
            src={imagePath}
            alt="Invest in Pakistani financial markets"
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>

        <div className="col-12">
          <h1 className="display-4 fw-bold mb-3 text-primary">{title}</h1>
          <p className="lead text-accent mb-4">{subtitle}</p>
          <Link to={ctaLink}>
            <button
              className="btn btn-primary btn-lg px-4 py-3"
              style={{
                minWidth: "200px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(1, 65, 28, 0.2",
              }}
            >
              {ctaText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
