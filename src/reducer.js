import { CREATE_TASK, DELETE_TASK, UPDATE_TASK } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        task: action.payload,
      };

    case UPDATE_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload),
      };

    default:
      throw new Error("Unhandled action");
  }
};

export default reducer;
