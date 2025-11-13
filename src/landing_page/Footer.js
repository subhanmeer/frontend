import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--background)" }}>
      <div className="container border-top mt-5"  style={{ borderColor: "var(--accent)" }}>
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logos.svg" style={{ width: "100%", marginBottom: "1rem" }} alt="BazaarX log" />
            <p style={{ color: "var(--primary)" }}>
            &copy; 2023 - 2024, BazaarX Technologies (PVT) Ltd. Karachi, Pakistan.
            </p>
            {/* Social Icons */}
          <div className="mt-3">
              <a href="/facebook" style={{ color: "var(--primary)", marginRight: "15px" }}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/twitter" style={{ color: "var(--primary)", marginRight: "15px" }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/linkedin" style={{ color: "var(--primary)", marginRight: "15px" }}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="/whatsapp" style={{ color: "var(--primary)" }}>
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          

          <div className="col">
          <h6 style={{ color: "var(--primary)", fontWeight: "bold" }}>Company</h6>
          <ul className="list-unstyled">
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Our Story</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Platform</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Pricing</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Referral Programme</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Careers</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>BazaarX Labs</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Media & Press</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>CSR Initiatives</a></li>
            </ul>
          </div>
          <div className="col">
            <h6 style={{ color: "var(--primary)", fontWeight: "bold" }}>Support</h6>
            <ul className="list-unstyled">
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Contact</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Help Center</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Blog</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Pricing Breakdown</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Resources</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>SECP Regulations</a></li>
            </ul>
          </div>
          <div className="col">
            <h6 style={{ color: "var(--primary)", fontWeight: "bold" }}>Account</h6>
            <ul className="list-unstyled">
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Open an Account</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Fund Transfer</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>30 Day Challenge</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>Halal Investments</a></li>
              <li><a href="/" style={{ color: "var(--accent)", textDecoration: "none" }}>PSX Market Data</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-5" style={{ color: "var(--accent)", fontSize: "14px", borderTop: "1px solid var(--accent)", paddingTop: "20px" }}>
        <p>
            BazaarX is a financial technology platform registered with SECP (Pakistan).
            We do not provide investment advice or act as a broker.
          </p>

          <p>
            <strong>Notice:</strong> All investments involve risk, including possible loss of principal.
            Please read all scheme-related documents carefully before investing.
          </p>

          <p>
            <i className="fas fa-shield-alt" style={{ color: "var(--primary)", marginRight: "5px" }}></i>
            Keep your login credentials secure. BazaarX will never ask for sensitive details via email/phone.
          </p>

          <p>
            <strong>PSX Trading Hours:</strong> 09:30 AM - 03:30 PM (PKT), Monday-Friday
          </p>

          <p className="text-muted" style={{ fontSize: "12px" }}>
            Need help? <a href="/" style={{ color: "var(--primary)", textDecoration: "none" }}>WhatsApp +92 300 1234567</a> | 
            <a href="/" style={{ color: "var(--primary)", textDecoration: "none", marginLeft: "10px" }}>support@bazaarix.com</a>
          </p>

          <p>
    <i className="fas fa-mobile-alt" style={{ color: "var(--primary)", marginRight: "5px" }}></i>
    Please ensure your mobile number and email are always updated to receive real-time PSX alerts.
    Transaction notifications will only be sent to your registered contacts.
  </p>

  <p>
    <strong>KYC Notice:</strong> SECP-required verification must be completed once with an 
    authorized intermediary. Subsequent investments won't require re-verification.
  </p>

  <p>
    <i className="fas fa-rupee-sign" style={{ color: "var(--primary)", marginRight: "5px" }}></i>
    For IPOs: No cheques needed. Simply authorize online payment from your Pakistani bank account. 
    Unallotted funds remain securely in your account.
  </p>

  <p className="alert alert-warning" style={{ 
    backgroundColor: "#FFF3CD", 
    padding: "10px",
    borderLeft: "4px solid var(--secondary)"
  }}>
    <i className="fas fa-exclamation-triangle" style={{ color: "var(--secondary)", marginRight: "5px" }}></i>
    <strong>Fraud Alert:</strong> BazaarX never provides stock tips, investment guarantees, 
    or authorized trading agents. Report suspicious activity immediately to 
    <a href="mailto:fraud@bazaarix.com" style={{ color: "var(--primary)", textDecoration: "none" }}> fraud@bazaarix.com</a>.
  </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
