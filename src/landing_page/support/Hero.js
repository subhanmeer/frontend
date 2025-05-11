import React from 'react';
import { Link } from 'react-router-dom';


function Hero({
  title = "Support Portal",
  searchPlaceholder = "Eg: how do I activate F&O on PSX",
  quickLinks = [
    { text: "Track account opening", url: "/track-account" },
    { text: "Track segment activation", url: "/track-activation" },
    { text: "Intraday margins in Pakistan", url: "/margins" },
    { text: "BazaarX user manual", url: "/user-manual" }
  ],
  featuredLinks = [
    { text: "Current Takeovers and Delisting - 2024", url: "/takeovers" },
    { text: "Latest Intraday leverages - MIS & CO", url: "/leverages" },
    { text: "SECP Regulatory Updates", url: "/secp-updates" },
    { text: "Islamic Trading Guidelines", url: "/islamic-trading" }
  ]
}) {
    return (
        <section className='container-fluid bg-accent text-white'>
          <div className='container'>
          <div className='d-flex justify-content-between align-items-center py-4'>
            <h4 className='mb-0'>{title}</h4>
            <Link to="/track-tickets" className='text-white text-decoration-none'>
            Track Tickets <i className="fas fa-external-link-alt ms-2"></i>
          </Link>
          </div>

          <div className='row py-5'>
            <div className='col-lg-6 mb-4 mb-lg-0 pe-lg-5'>
              <h2 className='h3 mb-4'>
                Search for an answer or browse help topics to create a ticket 
              </h2>
              <div className='mb-4'>
              <input 
              type='text'
              placeholder={searchPlaceholder}
              className='form-control form-control-lg'/>
              </div>
              
              <div className='d-flex flex-column'>
                {quickLinks.map((link, index) => (
                  <Link
                  key={index}
                  to={link.url}
                  className='text-white text-decoration-none py-2'>
                    {link.text}
                  </Link>
                ))}
              </div>
              </div>
              <div className='col-lg-6 ps-lg-5'>
                <h2 className='h3 mb-4'>Featured Resources</h2>
                <ol className='list-unstyled'>
                  {featuredLinks.map((link, index) => (
                    <li key={index} className='mb-3'>
                      <Link to={link.url} className='text-white text-decoration-none'>
                      {link.text}
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Hero;