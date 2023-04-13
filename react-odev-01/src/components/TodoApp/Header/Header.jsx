import React, { useState } from "react";
import { generateId } from "../../../helpers/generateId";

function Header({ addTodos }) {
  const [input, setInput] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);

  //function add a new todo with unique id
  const handleSubmit = (e) => {
    //blocking the default form behavior
    e.preventDefault();
    //check input validation
    const regex = /[a-zA-ZuığüşöçUĞÜİŞÖÇ]+/g;
    if (regex.test(input)) {
      setIsValidInput(false);
      const obj = { id: generateId(), title: input, isDone: false };
      addTodos((prev) => [obj, ...prev]);
      setInput("");
    } else {
      setIsValidInput(true);
    }
  };
  // function set value for input
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <header className="header">
      <h1>todos</h1>
      {isValidInput && (
        <p className="validationInfo">Please enter a valid input</p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={input}
          onChange={handleInput}
        />
      </form>
    </header>
  );
}

export default Header;
