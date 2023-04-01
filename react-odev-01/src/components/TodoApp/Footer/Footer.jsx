function Footer({ filter, selectFilter, todos, clearCompleted }) {
  const filters = ["all", "active", "completed"];
  //function set the selected filter
  const handleFilter = (e) => {
    selectFilter(e);
  };
  //function to clear completed todos
  const handleClearCompleted = () => {
    const activeTodos = todos.filter((todo) => {
      if (todo.isDone !== true) {
        return todo;
      }
    });
    clearCompleted(activeTodos);
  };

  //show todos length by filter
  let todoLength;

  if (filter === "all") {
    todoLength = todos.length;
  } else if (filter === "active") {
    todoLength = todos.filter((todo) => todo.isDone === false).length;
  } else if (filter === "completed") {
    todoLength = todos.filter((todo) => todo.isDone === true).length;
  }
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoLength}</strong>
        items left
      </span>

      <ul className="filters">
        {filters.map((filterName) => (
          <li key={filterName}>
            <a
              href="#/"
              className={filter === filterName ? "selected" : ""}
              onClick={() => handleFilter(filterName)}
            >
              {filterName[0].toUpperCase() + filterName.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <button className="clear-completed" onClick={handleClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
