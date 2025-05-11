import React from "react";

function Awards({
  title = "Pakistan's Most Trusted Stock Broker",
  description = "1.5+ million BazaarX clients account for over 20% of all retail trading volume on the PSX (Pakistan Stock Exchange) daily through:",
  servicesLeft = [
    "Futures & Options",
    "Commodity Trading",
    "Currency Exchange"
  ],
  servicesRight = [
    "Stocks & IPOs",
    "Islamic Mutual Funds",
    "Sukuk & Bonds"
  ]
}) {
  return (
    <div className="container py-5 my-5 border-top border-accent">
      <div className="row align-items-center ">
        <div className="col-md-6 p-4">
          <img 
           src="media/images/largestBroker.svg" 
           alt="" 
           className="img-fluid"
           style={{ maxWidth: '400px' }}/>
        </div>

        <div className="col-md-6 p-4">
          <h1 className="text-primary mb-4">{title}</h1>
          <p className="lead mb-5">
            {description}
          </p>

          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                {servicesLeft.map((service, index) => (
                 <li key={`left-${index}`} className="mb-3">
                  <span className="text-accent">✓</span>{service}
                 </li>    
                ))}
              </ul>
            </div>
            <div className="col-6">
              <ul>
                {servicesRight.map((service, index) => (
                  <li key={`right-${index}`} className="mb-3">
                    <span className="text-accent">✓</span>{service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-muted mb-3">As featured in:</p>
            <img 
              src="media/images/pressLogos.png"
              alt="Pakistan's leading financial publications including Dawn, The News, and Business Recorder"
              className="img-fluid"
              style={{maxWidth: '100%'}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
