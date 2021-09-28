import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;
  return (
    <div className="footer">
      <p>
        This is an exercise project of copying the exisiting app:
        <a href="https://pomofocus.io/" className="link">
          Pomodoro
        </a>
      </p>

      <p>Made by Vicky, check more side projects on my GitHub.</p>
      <a href="https://github.com/svickyx">
        Click here: <i className="github">{githubIcon}</i>
      </a>
    </div>
  );
};

export default Footer;
