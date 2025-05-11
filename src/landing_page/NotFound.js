import React from "react";
import { Link } from "react-router-dom";

function NotFound({
  title = "404 - Page Not Found",
  message = "We couldn't find the page you're looking for",
  ctaText = "Return to BazaarX Home",
  ctaLink = "/",
}) {
  return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center text-center">
        <div className="col-md-8">
          <h1 className="display-4 text-primary mb-4">{title}</h1>
          <p className="lead text-muted mb-5">{message}</p>
          <div className="d-flex flex-column align-items-center">
            <img
              src="media/images/404-error.svg"
              alt="Page not found illustration"
              className="img-fluid mb-5"
              style={{ maxWidth: "400px" }}
            />

            <Link to={ctaLink} className="btn btn-primary px-5 py-3">
              {ctaText}
            </Link>
            <p className="text-muted mt-4">
              Need help?{" "}
              <Link to="/support" className="text-decoration-none">
                Contact our Pakistan support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
