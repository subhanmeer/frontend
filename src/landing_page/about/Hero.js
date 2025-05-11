import React from "react";


/**
 * Hero component for the About page
 * @param {Object} props - Component props
 * @param {string} [props.title] - Main heading text
 * @param {string} [props.subtitle] - Subheading text
 * @returns {JSX.Element} - Rendered Hero component
 */

function Hero({
  title = "Pioneering the future of stock trading in Pakistan",
  subtitle = "Empowering investors through technology and transparency.",
}) {
  const leftColumnContent = [
    "We started operations on 14th August, 2023 with one mission — to remove barriers in Pakistan's stock market. Our platform is designed to simplify investing with intuitive tools and transparent pricing.",
    "Today, we're building an ecosystem where every Pakistani can take control of their financial future — no hidden fees, no complex jargon.",
    "With thousands of users already onboard, our aim is to redefine how trading is experienced in Pakistan.",
  ];

  const rightColumnContent = [
    "In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.",
    {
      text: "Rainmatter",
      link: "#",
      description:
        ", our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.",
    },
    "And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.",
  ];
  return (
    <div className="container">
      <div className="row py-5 my-5">
        <div className="col-12 text-center">
          <h1 className="display-5 fw-bold mb-3 text-primary" >{title}</h1>
          <p className="lead text-accent">{subtitle}</p>
        </div>
      </div>

      <div
        className="row py-5 border-top border-accent">

        <div className="col-md-6 p-4">
          {leftColumnContent.map((paragraph, index) => (
            <p key={`left-${index}`} className="mb-4" style={{lineHeight: "1.8"}}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="col-md-6 p-4">
          {rightColumnContent.map((content, index) => (
            <p key={`right-${index}`} className="mb-4" style={{lineHeight: "1.8"}}>
              {typeof content === 'string' ? content : (
                <>
                <a href={content.link}
                className=" fw-bold"
                style={{ 
                  color: "var(--primary)",
                  textDecoration: "none"
                }}
                >
                  {content.text}
                </a>
                {content.description}
                </>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
