import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from "./constants";

const createTask = (payload) => {
  return {
    type: CREATE_TASK,
    payload,
  };
};
const updateTask = (payload) => {
  return {
    type: UPDATE_TASK,
    payload,
  };
};
const deleteTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};

export { createTask, updateTask, deleteTask };
