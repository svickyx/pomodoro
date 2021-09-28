import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./task-setting.scss";

const TaskSetting = ({ handleDeleteAllList }) => {
  const trashIcon = <FontAwesomeIcon icon={faTrash} />;
  return (
    <div className="task-panel-setting">
      <div className="setting-item">
        <i>{trashIcon}</i>
        <span onClick={() => handleDeleteAllList()}>Clear all tasks</span>
      </div>
      <div className="setting-item">
        <i>{trashIcon}</i>
        <span>Clear finished tasks</span>
      </div>
    </div>
  );
};

export default TaskSetting;
