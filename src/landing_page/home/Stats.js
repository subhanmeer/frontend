import React from "react";

function Stats({
  trustPoints = [
    {
      title: "Customer-first always",
      description:
        "That's why 2+ million Pakistanis trust BazaarX with with Rs. 50,000 + crores worth of investments.",
    },
    {
      title: "No spam or gimmicks",
      description:
        "No pushy sales, 'gamification', or annoying notifications. High quality tools that work at your pace.",
    },
    {
      title: "The BazaarX ecosystem",
      description:
        "More than just an app - our partnerships with 15+ Pakistani fintechs offer services tailored for you.",
    },
    {
      title: "Grow your wealth",
      description:
        "With features like Islamic Portfolio Builder and Risk Shield, we help you invest wisely according to your values.",
    },
  ],
  imagePath = "media/images/ecosystem.png",
  imageAlt = "BazaarX ecosystem serving Pakistani investors",
}) {
  return (
    <div className="container py-3 my-5 border-top border-accent">
      <div className="row align-items-center">
        <div className="col-lg-6 p-4">
          <h1 className="display-6 text-primary mb-5">
            Trusted by Pakistan's Investors
          </h1>
          {trustPoints.map((point, index) => (
            <div key={index} className="mb-4">
                <h2 className="h4 text-accent mb-2">{point.title}</h2>
                <p className='text-muted'>{point.description}</p>
            </div>
          ))}
        </div>


        <div className="col-lg-6 p-4 text-center">
          <img
            src={imagePath}
            alt={imageAlt}
            className="img-fluid rounded shadow"
            style={{ maxWidth: "90%" }}
          />
          <div className="mt-4">
            <a href="/products" 
            className="btn btn-outline-primary mx-2" >
              Explore our products
              <i className="fas fa-arrow-right ms-2"></i>
            </a>
            <a href="/try-platform" 
            className="btn btn-link text-primary">
              Try BazaarX Web
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
