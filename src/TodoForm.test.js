import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

// Test to ensure that the NewTodoForm component renders correctly and its elements are present.
test("renders NewTodoForm component", () => {
  // Render the NewTodoForm component and capture a snapshot of the rendered component.
  const { asFragment } = render(<NewTodoForm />);

  // Find form elements in the rendered component.
  const taskInput = screen.getByLabelText("Task:");
  const addButton = screen.getByText("Add Todo");

  // Expect form elements to be present in the DOM.
  expect(taskInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();

  // Capture a snapshot of the rendered component for future reference.
  expect(asFragment()).toMatchSnapshot();
});

// Test to simulate form submission and verify that a new todo is added.
test("submitting form adds a new todo", () => {
  // Create a mock function to simulate the "addTodo" function.
  const addTodoMock = jest.fn();

  // Render the NewTodoForm component with the mock function.
  const { asFragment } = render(<NewTodoForm addTodo={addTodoMock} />);

  // Find form elements in the rendered component.
  const taskInput = screen.getByLabelText("Task:");
  const addButton = screen.getByText("Add Todo");

  // Simulate user input by firing change events on the task input field.
  fireEvent.change(taskInput, { target: { value: "Buy groceries" } });

  // Simulate form submission by clicking the "Add Todo" button.
  fireEvent.click(addButton);

  // Expect the mock function to have been called with the specified task.
  expect(addTodoMock).toHaveBeenCalledWith("Buy groceries");

  // Capture a snapshot of the rendered component after form submission.
  expect(asFragment()).toMatchSnapshot();
});

// Test to ensure that the TodoList component renders correctly with provided todos.
test("renders TodoList component", () => {
  // Sample todo data.
  const todos = [
    { id: 1, task: "Buy groceries" },
    { id: 2, task: "Clean the house" },
  ];

  // Render the TodoList component with the provided todos and capture a snapshot.
  const { asFragment } = render(<TodoList todos={todos} />);

  // Capture a snapshot of the rendered TodoList component.
  expect(asFragment()).toMatchSnapshot();
});
