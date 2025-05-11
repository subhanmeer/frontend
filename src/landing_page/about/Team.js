import React from "react";

function Team({
  sectionTitle = "Our Leadership",
  teamMembers = [
    {
      image: "media/images/nithinKamath.jpg",
      name: "Subhan Meer",
      position: "Founder, CEO",
      description: [
        "Subhan founded BazaarX after witnessing the struggles of Pakistani retail investors navigating the PSX (Pakistan Stock Exchange). His vision is to democratize investing for every Pakistani.",
        "He serves as an advisor to the SECP (Securities and Exchange Commission of Pakistan) on digital transformation initiatives for capital markets.",
        "A Karachi native and PU graduate, Subhan is passionate about financial inclusion. When not building BazaarX, he mentors fintech startups at NIC Karachi and plays cricket on weekends."
      ],
      socialLinks: [
        { name: "LinkedIn", url: "https://linkedin.com" },
        { name: "Twitter", url: "https://www.twitter.com" },
        { name: "Personal Blog", url: "https://www.dribbble.com" },
      ],
    },
  ],
}) {
  return (
    <div className="container">
      <div className="row py-5 border-top border-accent">
        <h1 className="text-center text-primary">{sectionTitle}</h1>
      </div>

      {teamMembers.map((member, index) => (
        <div key={index} className="row py-5">
          <div className="col-md-6 p-4 text-center">
            <img
              src={member.image}
              alt={`Portrait of ${member.name}`}
              className="img-fluid rounded=circle shadow"
              style={{ width: "70%", 
              maxWidth: "250px",
              border: "4px solid var(--accent",
              borderRadius: "100%"
               }}
            />
            <h4 className="mt-4 text-primary">{member.name}</h4>
            <h6 className="text-accent fw-light">{member.position}</h6>
          </div>

          <div className="col-md-6 p-4">
            {member.description.map((paragraph, i) => (
              <p key={i} className="mb-3" style={{ lineHeight: "1.8" }}>
                {paragraph}
              </p>
            ))}

            <p className="mt-4">
              <span className="me-2">Connect:</span>
              {member.socialLinks.map((link, i) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.url}
                    className="text-primary text-decoration-none fw-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                  {i < member.socialLinks.length - 1 ? (
                    <span className="mx-2 text-muted">|</span>
                  ) : ""}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
