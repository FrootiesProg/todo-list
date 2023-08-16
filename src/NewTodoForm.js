import React, { useState } from "react";
import "./App.css"; // Import the CSS

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  // Function to handle input change
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(task);
    setTask("");
  };

  return (
    <div className="NewTodoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
