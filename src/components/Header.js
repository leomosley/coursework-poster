import React from "react";
import { icons } from "../constants";

function Header() {

  const GithubLink = () => {
    return (
      <a
        className="github-link" 
        target="_blank"
        href="https://github.com/leomosley/coursework-poster"
      >
        <img
          className="github-icon"
          src={icons.github}
        />
      </a>
    );
  }
  return (
    <div className="header">
      <p className="header-text title">Developing a Custom Algorithm for Optimising Routes Based on Ethical Principles for Self-Driving Cars</p>
      <div className="header-links">
        <p className="header-text sub-title">Leo Mosley • UP2212140 • <GithubLink /></p>
      </div>
    </div>
  );
}

export default Header;