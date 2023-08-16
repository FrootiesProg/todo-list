import React, { useState } from 'react';
import './App.css'; // Import the CSS

function Todo({ task, index, removeTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const [isCompleted, setIsCompleted] = useState(false);

  // Function to handle the "Edit" button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Function to handle the form submission when editing
  const handleEditSubmit = (event) => {
    event.preventDefault();
    // Update the task and exit edit mode
    setEditedTask(editedTask);
    setIsEditing(false);
  };

  // Function to handle the "Mark as completed" button click
  const handleCompleteClick = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="Todo" style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      <div>
        {isEditing ? (
          <form onSubmit={handleEditSubmit}>
            <input
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        ) : (
          <span>{task}</span>
        )}
      </div>
      <button onClick={() => removeTodo(index)}>X</button>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleCompleteClick}>
        {isCompleted ? 'Unmark as completed' : 'Mark as completed'}
      </button>
    </div>
  );
}

export default Todo;