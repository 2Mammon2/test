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
        onChange={(e) => dispatch(createTask(e.target.value))}
        ref={inputRef}
        onKeyUp={(e) => e.which === 13 && handleSubmit()}
      />

      <i
        className="fa-solid fa-paper-plane"
        onClick={handleSubmit}
        onKeyDown={handleSubmit}
      ></i>
    </InputTaskWrapper>
  );
};

export default memo(InputTask);
