import React from "react";
import { Link } from "react-router-dom";

function Universe({
  title = "The BazaarX Ecosystem",
  description = "Extend your trading and investment experience with our partner platforms in Pakistan",
  ctaText = "Signup Now",
  ctaLink = "/signup",
}) {
  return (
    <div className="container py-5 my-5 border-top border-accent">
      <div className="row text-center">
        <div className="col-12 mb-5">
          <h1 className="display-5 text-primary">{title}</h1>
          <p className="lead text-muted">{description}</p>
        </div>

        <div className="col-md-4 col-6 p-3">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Thematic investment platform"
            className="img-fluid mb-3"
            style={{ height: "50px" }}
          />
          <p className="text-muted small">Thematic investment platform</p>
        </div>
        <div className="col-md-4 col-6 p-3">
          <img
            src="media/images/streakLogo.png"
            alt="Algo & strategy platform"
            className="img-fluid mb-3"
            style={{ height: "50px" }}
          />
          <p className="text-muted small">Algo & strategy platform</p>
        </div>

        <div className="col-md-4 col-6 p-3">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Options trading platform"
            className="img-fluid mb-3"
            style={{ height: "50px" }}
          />
          <p className="text-muted small">Options trading platform</p>
        </div>

        <div className="col-md-4 col-6 p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Asset management"
            className="img-fluid mb-3"
            style={{ height: "50px" }}
          />
          <p className="text-muted small">Asset management</p>
        </div>

        <div className="col-md-4 col-6 p-3">
          <img
            src="media/images/goldenpiLogo.png"
            alt="Bonds trading platform"
            className="img-fluid mb-3"
            style={{ height: "50px" }}
          />
          <p className="text-muted small">Bonds trading platform</p>
        </div>

        <div className="col-md-4 col-6 p-3">
          <img
            src="media/images/dittoLogo.png"
            alt="Insurance services"
            className="img-fluid mb-3"
            style={{ height: "50px" }}
          />
          <p className="text-muted small">Insurance</p>
        </div>

        <div className="col-12 mt-4">
          <Link to={ctaLink} className="btn btn-primary px-5 py-2">
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
