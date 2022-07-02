import React from "react";
import { StyledButton, StyledLi, TaskWrapper } from "./Task.style";

const Task = ({ task, index, deleteTask, dispatch }) => {
  return (
    <TaskWrapper>
      <StyledLi>{task}</StyledLi>
      <StyledButton>
        <i
          className="fa-solid fa-trash-can"
          onClick={() => dispatch(deleteTask(index))}
        ></i>
      </StyledButton>
    </TaskWrapper>
  );
};

export default Task;
