import React from "react";
import "./task-item-list.scss";
import TaskItem from "../task-item/TaskItem";

const TaskItemLists = ({ taskList, handleDelete }) => {
  return (
    <ul className="task-lists-container">
      {taskList.map(({ title, note }, index) => {
        return (
          <TaskItem
            key={index}
            title={title}
            note={note}
            handleDelete={handleDelete}
            index={index}
          />
        );
      })}
    </ul>
  );
};

export default TaskItemLists;
