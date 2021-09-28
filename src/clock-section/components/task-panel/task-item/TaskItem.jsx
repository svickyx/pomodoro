import React from "react";
import "./task-item.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ title, note, handleDelete, index }) => {
  //icons
  const checkIcon = <FontAwesomeIcon icon={faCheckCircle} />;
  const trashIcon = <FontAwesomeIcon icon={faTrash} />;

  return (
    <li className="task-item">
      <div className="task-item-title">
        <i className="check-icon">{checkIcon}</i>
        <span className="title">{title}</span>
      </div>
      <div className="task-item-icon">
        <i className="trash-icon" onClick={() => handleDelete(index)}>
          {trashIcon}
        </i>
      </div>
      {note ? <span className="note">{note}</span> : null}
    </li>
  );
};

export default TaskItem;
