import { useEffect, useReducer, useRef } from "react";
import { createTask, deleteTask, updateTask } from "./actions";
import "./App.css";
import InputTask from "./components/InputTask";
import Task from "./components/Task";
import reducer from "./reducer";

// Init state
const initState = {
  task: "",
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const inputRef = useRef();

  const { task, tasks } = state;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <InputTask
        task={task}
        createTask={createTask}
        updateTask={updateTask}
        dispatch={dispatch}
        inputRef={inputRef}
      />

      <div className="tasks">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              index={index}
              deleteTask={deleteTask}
              dispatch={dispatch}
            />
          ))
        ) : (
          <p className="no-tasks">No tasks to display</p>
        )}
      </div>
    </div>
  );
}

export default App;
