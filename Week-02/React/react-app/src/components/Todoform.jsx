import React, { useState } from "react";

function TodoForm() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editableTodo, setEditableTodo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editableTodo) {
      const updated = todos.map((todo) =>
        todo.id === editableTodo.id ? { ...todo, text: input } : todo
      );
      setTodos(updated);
      setEditableTodo(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

    setInput("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (todo) => {
    setEditableTodo(todo);
    setInput(todo.text);
  };

  return (
    <div className="todo-app-layout">
      <div className="form-panel">
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            placeholder="Enter todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">{editableTodo ? "Update" : "Add"}</button>
        </form>
      </div>

      <div className="card-panel">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`card ${todo.completed ? "completed" : ""}`}
          >
            <p className={todo.completed ? "completed-text" : ""}>{todo.text}</p>
            <div className="buttons">
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
              <button onClick={() => handleEdit(todo)}>Update</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoForm;
