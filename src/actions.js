const CREATE_TASK = "CREATE_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const DELETE_TASK = "DELETE_TASK";

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

export {
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  createTask,
  updateTask,
  deleteTask,
};
