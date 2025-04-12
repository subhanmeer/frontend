import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logos.svg" style={{ width: "100%" }} />
            <p>
              &copy; 2023 - 2024, BazaarX Technologies Pvt. Ltd. All rights
              reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="" style={{ textDecoration: "none" }}>
              Our Story
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Platform
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Pricing
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Referral programme
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Careers
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              BazaarX Labs
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Media & Press
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              CSR Initiatives
            </a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="" style={{ textDecoration: "none" }}>
              Contact
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Help Center
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Blog
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Pricing Breakdown
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Resources
            </a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="" style={{ textDecoration: "none" }}>
              Open an account
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Fund transfer
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              60 day challenge
            </a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            BazaarX is a financial technology platform registered under
            applicable laws in Pakistan. We do not provide investment advice or
            act as a broker on behalf of clients.
          </p>

          <p>
            All investments involve risk, including possible loss of principal.
            Please read all scheme-related documents carefully before investing.
          </p>

          <p>
            Keep your login credentials secure. BazaarX will never ask for
            sensitive account details via email or phone.
          </p>

          <p>
            Please ensure your mobile number and email are always up to date to
            receive real-time alerts from BazaarX. For your security,
            transaction details will be shared directly to your registered
            contact information. KYC (Know Your Customer) is mandatory for
            investing, and once completed with a SECP-registered intermediary,
            it need not be repeated. If you are applying for an IPO, you do not
            need to issue a cheque — simply provide your bank account details
            and authorize online payment. In case of non-allotment, the funds
            will remain safely in your bank account. ⚠️ BazaarX does not provide
            stock tips or investment guarantees. We do not authorize anyone to
            trade on your behalf. If you come across any such fraudulent claims,
            please report them via our official support channel immediately.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
