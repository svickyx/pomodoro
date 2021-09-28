import React from "react";
import "./header.scss";

const ClockHeader = () => {
  return (
    <div className="header-container">
      <div className="header-icon-container">
        <img
          className="tamoto-clock-icon"
          src="https://cdn0.iconfinder.com/data/icons/vegetables-ii-color/290/18-512.png"
          alt="tamoto-clock-icon"
        />
        <span>Tomato Clock</span>
      </div>
      <div className="header-setting-container">
        <button className="report-button">Report</button>
        <button className="setting-button">Setting</button>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default ClockHeader;
