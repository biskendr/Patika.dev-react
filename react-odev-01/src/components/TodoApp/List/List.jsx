import React, { useEffect } from "react";

function List({ todos, setTodos, filter }) {
  //function update todo status
  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  //function remove todo item
  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  //update todo list by filter
  let filteredTodos;

  if (filter === "all") {
    filteredTodos = todos;
  } else if (filter === "active") {
    filteredTodos = todos.filter((todo) => todo.isDone === false);
  } else if (filter === "completed") {
    filteredTodos = todos.filter((todo) => todo.isDone === true);
  }

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {filteredTodos.map(({ id, title, isDone }) => {
          return (
            <li className={isDone ? "completed" : ""} key={id}>
              <input
                className="toggle"
                type="checkbox"
                checked={isDone}
                onChange={() => handleToggleTodo(id)}
              />
              <label>{title}</label>
              <button
                className="destroy"
                onClick={() => handleRemoveTodo(id)}
              ></button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default List;
