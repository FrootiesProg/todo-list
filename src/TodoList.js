import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./App.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  // Function to remove a todo by index
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={index} task={todo} index={index} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default TodoList;
