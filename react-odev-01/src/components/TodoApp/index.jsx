import React, { useEffect, useState } from "react";
import { generateId } from "../../helpers/generateId";
import Header from "./Header/Header";
import List from "./List/List";
import Footer from "./Footer/Footer";

const initialTodos = [
  {
    id: generateId(),
    title: "Learn Vue",
    isDone: false,
  },
  {
    id: generateId(),
    title: "Learn Next.js",
    isDone: false,
  },

  {
    id: generateId(),
    title: "Learn React",
    isDone: true,
  },
];

function TodoApp() {
  //get local storage todos doesn't exist use initialTodos
  const localTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : initialTodos;
  //state variables are defined here because this is a more suitable approach for state management.
  const [todos, setTodos] = useState(localTodos);
  const [filter, setFilter] = useState("all");
  //set todos local storage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <section className="todoapp">
      <Header addTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} filter={filter} />
      <Footer
        filter={filter}
        selectFilter={setFilter}
        todos={todos}
        clearCompleted={setTodos}
      />
    </section>
  );
}

export default TodoApp;
