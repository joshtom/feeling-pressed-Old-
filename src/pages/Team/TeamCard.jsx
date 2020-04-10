import React from "react";
import "./team.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const TeamCard = ({ imgUrl, name, role, text }) => (
  <div className="team-card">
    <div className="img">
      <img src={imgUrl} alt="img" className="team-img" />
    </div>
    <span className="name">{name}</span>
    <span className="role">{role}</span>
    <p className="text">{text}</p>
    <div className="social-media">
      <div className="media-handles mt">
        <FontAwesomeIcon icon={faFacebookF} className="icon facebook" />
      </div>
      <div className="media-handles mt">
        <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
      </div>

      <div className="media-handles">
        <FontAwesomeIcon icon={faEnvelope} className="icon envelope" />
      </div>
    </div>
  </div>
);

export default TeamCard;
