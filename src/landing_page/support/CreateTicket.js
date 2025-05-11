import React from 'react';
import { Link } from 'react-router-dom';

function CreateTime({
  categories = [
    {
      title: "Account Opening",
      icon: "fa-plus-circle",
      links: [
        "Online Account Opening",
        "Company, Partnership and HUF Account",
        "Account Activation",
        "Overseas Account Opening",
        "Charges at BazaarX",
        "BazaarX Bank 3-in-1 Account",
        "Getting Started"
      ]
    },
    {
      title: "Trading & Investments",
      icon: "fa-chart-line",
      links: [
        "Equity Trading",
        "Commodity Trading",
        "Mutual Funds",
        "IPO Applications",
        "PSX Trading",
        "Islamic Investments",
        "Portfolio Management"
      ]
    },
    {
      title: "Technical Support",
      icon: "fa-laptop",
      links: [
        "Mobile App Issues",
        "Web Platform Issues",
        "Two-Factor Authentication",
        "Password Reset",
        "API Integration",
        "Browser Compatibility",
        "System Requirements"
      ]
    },
    {
      title: "Deposit & Withdrawal",
      icon: "fa-money-bill-wave",
      links: [
        "Fund Deposits",
        "Withdrawal Requests",
        "Bank Account Linking",
        "Transaction Status",
        "Payment Gateway Issues",
        "Islamic Banking Options",
        "Tax Certificates"
      ]
    },
    {
      title: "Documentation",
      icon: "fa-file-alt",
      links: [
        "Account Verification",
        "KYC Requirements",
        "Tax Documents",
        "Account Statements",
        "Contract Notes",
        "SECP Compliance",
        "Shariah Certificates"
      ]
    },
    {
      title: "Other Queries",
      icon: "fa-question-circle",
      links: [
        "Complaints",
        "Suggestions",
        "Partnership Inquiries",
        "Business Accounts",
        "Institutional Services",
        "Educational Resources",
        "Contact Support"
      ]
    }
  ]
}) {
    return ( 
        <div className='container py-5'>
            <div className='row mb-5'>
              <div className='col-12 text-center'>
                <h1 className='display-6 text-primary'>Create Support Ticket</h1>
                <p className='lead text-muted'>Select a relevant topic for your inquiry</p>
                </div>
            </div>
            <div className='row'>
              {categories.map((category, index) => (
                <div key={index} className='col-md-4 col-sm-6 mb-4'>
                  <div className='card h-100 border-accent'>
                    <div className='card-body'>
                      <h4 className='text-accent'>
                      <i className={`fa ${category.icon}`} aria-hidden="true"></i>
                      {` ${category.title}`}
                      </h4>
                      <div className='d-flex flex-column mt-3'>
                        {category.links.map((link, linkIndex) => (
                          <Link
                          key={linkIndex}
                          to="/support-form"
                          state={{category: category.title, topic: link}}
                          className='text-decoration-none text-muted py-2'>
                            {link}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
     );
}

export default CreateTime;