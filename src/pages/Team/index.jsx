import React from "react";
import TeamCard from "./TeamCard";
import { Data } from "./teamData";
import "./team.styles.scss";

const OurTeam = () => (
  <main className="our-team">
    <div className="container">
      <h1 className="team-heading text-center">Meet Our Team</h1>
      <div className="row">
        {Data.map((team) => (
          <div className="col-lg-4 col-sm-12" key={team.id}>
            <TeamCard
              imgUrl={team.imgUrl}
              name={team.name}
              role={team.role}
              text={team.text}
            />
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default OurTeam;
