import React from 'react';
import { Link } from 'react-router-dom';


function Hero({
    title = "Pakistani-First Trading Technology",
  subtitle = "Shariah-compliant platforms designed for Pakistan's investors",
  ctaText = "Explore Investment Products",
  ctaLink = "/investments"
}) {
    return ( 
        <div className='container border-bottom border-accent pb-5 mb-5'>
            <div className='text-center py-5'>
                <h1 className='display-5 text-primary'>{title}</h1>
                <h3 className='text-accent mt-3 lead'>
                    {subtitle}
                </h3>
                <div className='mt-4'>
                    <Link to={ctaLink}
                    className='btn btn-outline-primary px-4 py-2'>
                        {ctaText} <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>
        </div>
     );
}

export default Hero;