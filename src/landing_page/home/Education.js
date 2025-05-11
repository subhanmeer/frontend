import React from "react";

function Education({
  educationResources = [
    {
      title: "BazaarX Academy",
      description:
        "Pakistan's most comprehensive stock market education platform covering everything from basics to advanced Islamic finance concepts.",
      ctaText: "Explore Academy",
      ctaLink: "/academy",
    },
    {
      title: "Investors Forum",
      description:
        "Pakistan's largest investment community with daily market insights from top analysts and fund managers.",
      ctaText: "Join Community",
      ctaLink: "/community",
    },
  ],
  imagePath = "media/images/education.svg",
  imageAlt = "Financial education for Pakistani investors",
}) {
  return (
    <div className="container py-5 my-5 border-top border-accent">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
          <img
            src={imagePath}
            alt={imageAlt}
            className="img-fluid"
            style={{ maxWidth: "70%" }}
          />
        </div>

        <div className="col-lg-6">
          <h1 className="display-6 text-primary mb-4">
            Free Market Education for Pakistan
          </h1>

          {educationResources.map((resource, index) => (
            <div key={index} className='mb-5'>
              <h2 className='h4 text-accent mb-2'>{resource.title}</h2>
              <p className='text-muted mb-3'>{resource.description}</p>
              <a 
                href={resource.ctaLink} 
                className='btn btn-outline-primary'
              >
                {resource.ctaText} <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
