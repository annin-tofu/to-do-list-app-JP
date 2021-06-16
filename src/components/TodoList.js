import React, { useState } from "react";
import TodoForm from "../components/TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  //   if no one types letter (i.e. mega spaces) => it will not show up
  //   https://youtu.be/E1E08i2UJGI?t=1117

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  return (
    <div>
      <h1>Whats the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;
