import React, { memo } from "react";
import { InputTaskWrapper, StyledInput } from "./InputTask.style";

const InputTask = ({ task, createTask, updateTask, dispatch, inputRef }) => {
  const handleSubmit = () => {
    dispatch(updateTask(task));

    dispatch(createTask(""));

    inputRef.current.focus();
  };

  return (
    <InputTaskWrapper>
      <i className="fa-solid fa-bars"></i>

      <StyledInput
        value={task}
        type="text"
        placeholder="Add new task"
        ref={inputRef}
        onChange={(e) => dispatch(createTask(e.target.value))}
        onKeyUp={(e) => e.which === 13 && handleSubmit()}
      />

      <i
        className="fa-solid fa-paper-plane"
        onClick={handleSubmit}
        onKeyUp={handleSubmit}
      ></i>
    </InputTaskWrapper>
  );
};

export default memo(InputTask);
