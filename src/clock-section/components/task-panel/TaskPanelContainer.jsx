import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faPlus } from "@fortawesome/free-solid-svg-icons";

//import components
import TaskSetting from "./task-setting/task-setting";
import TaskItemLists from "./task-item-lists/TaskItemLists";
import AddTaskForm from "./add-task-form/AddTaskForm";

//import css
import "./task-panel.scss";

const TaskPanelContainer = () => {
  //font-awesome icons
  const ellipsisIcon = <FontAwesomeIcon icon={faEllipsisV} />;
  const plusIcon = <FontAwesomeIcon icon={faPlus} />;

  //hooks
  const [taskSetting, setTaskSetting] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [taskList, setTaskList] = useState([]);

  //toggle task form setting
  const toggleSetting = () => {
    setTaskSetting(!taskSetting);
  };

  //add new task list
  const handleTaskContent = (taskContent) => {
    setTaskList([...taskList, taskContent]);
  };

  //remove target list item by index
  const handleDelete = (index) => {
    let afterDeleteList = taskList.filter((_, i) => {
      return i !== index;
    });
    setTaskList(afterDeleteList);
  };

  //clear all the list item
  const handleDeleteAllList = () => {
    setTaskList([]);
    setTaskSetting(false);
  };

  return (
    <div className="task-panel-container">
      <div className="task-panel">
        <div className="task-header-container">
          <span>Task</span>
          <i onClick={() => toggleSetting()}>{ellipsisIcon}</i>
        </div>
        {taskSetting ? (
          <TaskSetting handleDeleteAllList={handleDeleteAllList} />
        ) : null}
        <TaskItemLists taskList={taskList} handleDelete={handleDelete} />
        <div className="task-form-container">
          {editForm ? (
            <AddTaskForm
              setEditForm={setEditForm}
              handleTaskContent={handleTaskContent}
            />
          ) : (
            <div
              className="add-task-button-container"
              onClick={() => setEditForm(true)}
            >
              <i>{plusIcon}</i>
              <span>Add Task</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskPanelContainer;
