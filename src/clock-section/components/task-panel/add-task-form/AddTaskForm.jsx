import React, { useState, useRef } from "react";
import "./add-task-form.scss";

const AddTaskForm = ({ setEditForm, handleTaskContent }) => {
  // hooks
  const [addNote, setAddNote] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);
  const titleInput = useRef("");
  const noteInput = useRef("");

  //submit the form, clear the content, disable the save button
  const handleSumbit = (e) => {
    e.preventDefault();
    const taskContent = {
      title: titleInput.current.value,
      note: noteInput.current.value,
    };
    handleTaskContent(taskContent);
    e.target.reset();
    setBtnDisable(true);
  };
  return (
    <form
      className="add-task-form"
      id="add-task-form"
      onSubmit={(e) => handleSumbit(e)}
    >
      <div className="add-task-form-content">
        <input
          type="text"
          placeholder="What are you working on?"
          ref={titleInput}
          onChange={() =>
            titleInput ? setBtnDisable(false) : setBtnDisable(true)
          }
        />
        <div className="add-note-button" onClick={() => setAddNote(true)}>
          + Add Note
        </div>
        {addNote ? (
          <textarea
            className="add-note-textarea"
            name="add-note-textarea"
            form="add-task-form"
            placeholder="add some notes..."
            ref={noteInput}
          />
        ) : null}
      </div>
      <div className="save-cancel-container">
        <button type="button" onClick={() => setEditForm(false)}>
          Cancel
        </button>
        <button type="submit" disabled={btnDisable}>
          Save
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
