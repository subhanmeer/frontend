import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className=" text-center fs-2 ">
          Pioneering the future of stock trading in Pakistan
          <br /> Empowering investors through technology and transparency.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            We started operations on 14th August, 2023 with one mission — to
            remove barriers in Pakistan’s stock market. Our platform is designed
            to simplify investing with intuitive tools and transparent pricing.
          </p>
          <p>
  Today, we're building an ecosystem where every Pakistani can take control of their financial future — no hidden fees, no complex jargon.
</p>

<p>
  With thousands of users already onboard, our aim is to redefine how trading is experienced in Pakistan.
</p>
        </div>

        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
