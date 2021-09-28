import React, { useState } from "react";
import "./clock-section.scss";

import ClockPanelContainer from "./components/clock-panel/ClockPanelContainer";
import TaskPanelContainer from "./components/task-panel/TaskPanelContainer";

const ClockSection = () => {
  //set background color and pass to clock panel for action state to use
  const [baseColor, setBaseColor] = useState("#f81a0ad0");
  return (
    <div className="clock-page" style={{ backgroundColor: baseColor }}>
      <ClockPanelContainer setBaseColor={setBaseColor} />
      <TaskPanelContainer />
    </div>
  );
};

export default ClockSection;
