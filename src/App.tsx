import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";

import toggleMoon from "./images/icon-moon.svg";
import toggleLight from "./images/icon-sun.svg";
import { Todo } from "./types";

import Input from "./components/Create";

import db from "../data.json";
import { Context } from "./context/Provider";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(db);
  const { option, toggle } = useContext(Context);

  function addItem(title: Todo["title"]) {
    const nuevo = {
      id: new Date().getMilliseconds(),
      title,
      completed: false,
    };

    setTodos([nuevo, ...todos]);
  }

  function toggleCompleted(id: Todo["id"]) {
    const nuevo = todos.find((x) => x.id === id);
    if (nuevo) nuevo.completed = !nuevo.completed;
    setTodos([...todos]);
  }

  function clearCompleted() {
    setTodos(todos.filter((x) => !x.completed));
  }
  return (
    <main className={`main ${option === "dark" && "dark"}`}>
      <div className="main__header">
        <h1>TODO</h1>
        <span
          className="toggle"
          onClick={() => toggle(option === "dark" ? "light" : "dark")}
        >
          <img
            src={option === "light" ? toggleMoon : toggleLight}
            alt="toggle"
          />
        </span>
      </div>
      <div className="main__body">
        <Input addItem={addItem} />
        <List
          items={todos}
          toggleCompleted={toggleCompleted}
          clearCompleted={clearCompleted}
        />
      </div>
    </main>
  );
};

export default App;
