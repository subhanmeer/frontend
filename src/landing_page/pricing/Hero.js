import React from "react";

function Hero({
  title = "Transparent Pricing for Pakistan",
  subtitle = "Free equity investments and flat Rs. 20 intraday and F&O trades",
  pricingFeatures = [
    {
      icon: "media/images/pricingEquity.svg",
      title: "Free Equity Delivery",
      description:
        "All PSX equity delivery investments are absolutely free - Rs. 0 brokerage.",
      alt: "Equity investment illustration",
    },
    {
      icon: "media/images/intradayTrades.svg",
      title: "Intraday and F&O",
      description:
        "Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades.",
      alt: "Intraday trading illustration",
    },
    {
      icon: "media/images/pricingEquity.svg",
      title: "Free Islamic Funds",
      description:
        "All Islamic mutual fund investments are free - Rs. 0 commissions & charges.",
      alt: "Mutual funds illustration",
    },
  ],
}) {
  return (
    <div className="container">
      <div className="row py-5 border-bottom border-accent text-center">
        <div className="col-12">
          <h1 className="display-5 text-primary">{title}</h1>
          <h3 className="text-accent mt-3 lead">{subtitle}</h3>
        </div>
      </div>

      <div className="row py-5 g-4">
        {pricingFeatures.map((feature, index) => (
          <div key={index} className="col-md-4 p-4">
            <div className="h-100 p-4">
              <img
                src={feature.icon}
                alt={feature.alt}
                className="img-fluid mb-4"
                style={{ height: "80px" }}
              />
              <h2 className="h4 text-primary mb-3">{feature.title}</h2>
              <p className="text-muted mb-0">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
