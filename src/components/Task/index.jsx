import { StyledButton, StyledLi, TaskWrapper } from "./Task.style";

const Task = ({ task, index, deleteTask, dispatch, onFinish }) => {
  const handleDelete = () => {
    dispatch(deleteTask(index));
    onFinish();
  };

  return (
    <TaskWrapper>
      <StyledLi title={task}>
        <p>{task}</p>
      </StyledLi>
      <StyledButton>
        <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
      </StyledButton>
    </TaskWrapper>
  );
};

export default Task;
