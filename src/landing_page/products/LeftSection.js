import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5 my-5 border-top border-accent">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={imageURL}
          alt={`${productName} interface`}
          className="img-fluid rounded shadow" 
          style={{maxWidth: '100%'}}/>
        </div>

        <div className="col-md-6 p-md-4">
          <h2 className="text-primary mb-4">{productName}</h2>
          <p className="lead text-muted mb-4">{productDescription}</p>
          <div className="d-flex gap-3 mb-4">
            <a href={tryDemo}
            className="btn btn-outline-primary px-4 py-2">Try Live Demo</a>
            <a href={learnMore} 
            className="btn btn-primary px-4 py-2" 
            >
              Learn More
            </a>
          </div>

          <div className="d-flex gap-3">
            <a href={googlePlay} aria-label="Download on Google Play">
              <img 
              src="media/images/googlePlayBadge.svg" 
              alt="Get it on Google Play"
              className="img-fluid"
              style={{ height: '40px' }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on the App Store"
                className="img-fluid"
                style={{ height: '40px' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
