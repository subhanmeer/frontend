import React from "react";

function Pricing({
  title = "Pakistan's Most Transparent Pricing",
  description = "We pioneered discount brokerage in Pakistan with complete transparency. Enjoy flat fees with no hidden charges, compliant with SECP regulations.",
  pricingTiers = [
    {
      price: "PKR 0",
      title: "Free Equity Delivery",
      features: ["Stocks", "Sukuk", "IPOs", "Direct Mutual Funds"],
    },
    {
      price: "PKR 20",
      title: "Advanced Trading",
      features: ["Futures & Options", "Commodities", "Currency Trading"],
    },
  ],
}) {
  return (
    <div className="container py-5 my-5 border-top border-accent">
      <div className="row align-items-center">
        <div className="col-lg-5 mb-4 mb-lg-0">
          <h1 className="display-6 text-primary mb-3">{title}</h1>
          <p className="lead text-muted mb-4">{description}</p>
          <a href="/pricing" className="btn btn-outline-primary">
            View Complete Pricing <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>

        <div className="col-lg-7">
          <div className="row g-3">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="col-md-6">
                <div
                  className="p-4 border rounded h-100"
                  style={{ borderColor: "var(--accent)" }}
                >
                  <h2 className="text-primary mb-3">{tier.price}</h2>
                  <h3 className="h5 mb-3">{tier.title}</h3>
                  <ul className="list-unstyled">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="mb-2">
                        <span className="text-accent">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
