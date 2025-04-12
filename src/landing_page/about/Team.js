import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Subhan Meer</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-3">
          <p>
            Subhan founded [BazaarX] after experiencing firsthand the
            challenges faced by young investors in Pakistan. His mission: to
            build a platform that levels the playing field for all.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            When not coding or refining product strategy, you’ll find him on the
            court playing basketball or diving into new fintech ideas.
          </p>
          <p>
            Connect on <a href="">LinkedIn</a> / <a href="">Twitter</a> /{" "}
            <a href="">Personal Blog</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
