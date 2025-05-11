import React from "react";
import { Link } from "react-router-dom";

function Brokerage({
  brokeragePoints = [
    "Call & Trade and RMS auto-squareoff: Additional charges of Rs.50 + Tax per order.",
    "Digital contract notes will be sent via email and SMS (as per SECP regulations).",
    "Physical copies of contract notes available for Rs.20 per note + courier charges.",
    "For accounts in debit balance, orders will be charged Rs.40 per executed order.",
    "Early settlement charges apply for certain transactions (details in tariff sheet).",
  ],
}) {
  return (
    <div className="container py-5">
      <div className="row justify-content-center border-top border-accent py-5">
        <div className="col-lg-8 col-md-10">
          <div className="row g-4">
            <div className="col-md-8">
              <Link to="/brokerage-calculator" className="text-decoration-none">
                <h3 className="h5 text-primary mb-4">Brokerage Calculator</h3>
              </Link>
              <ul className="list-unstyled">
                {brokeragePoints.map((point, index) => (
                  <li key={index} className="mb-3 d-flex">
                    <span className="text-accent me-2">•</span>
                    <span className="text-muted">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-4">
              <Link to="/charges" className="text-decoration-none">
                <div className="card h-100 border-accent">
                  <div className="card-body d-flex flex-column justify-content-center">
                    <h3 className="h5 text-primary text-center mb-0">
                      Complete Tariff Sheet
                    </h3>
                    <p className="text-muted text-center mt-2 small">
                      View all charges and fees
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
