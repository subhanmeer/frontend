import React from "react";
import { Link } from 'react-router-dom';


function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container py-5 my-5 border-top border-accent">
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2 mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={`${productName} interface`}
            className="img-fluid rounded shadow"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-md-6 order-md-1 p-md-4">
          <h2 className="text-primary mb-4">{productName}</h2>
          <p className="lead text-muted mb-4">{productDescription}</p>
          
          <Link 
            to={learnMore} 
            className="btn btn-primary px-4 py-2"
          >
            Learn More <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
