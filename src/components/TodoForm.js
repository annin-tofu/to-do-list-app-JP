import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  // ternary value i.e. ? ! :(means else) https://reactjs.org/docs/conditional-rendering.html
  //   If setState('') was used => the value will be deleted as update button is clicked
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null, "input");

  //  about useEffecct function check https://reactjs.org/docs/hooks-reference.html#useeffect
  // about ref https://reactjs.org/docs/refs-and-the-dom.html,
  //  https://youtu.be/E1E08i2UJGI
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  //to prevent reloading when "Add todo" button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000), // this line auto assigns random ID (1 to 10000) for each mesage
      text: input,
    });

    // * this line below sets the value in the box to null (""), otherwise it will keep the value after  clicking Addto do button
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        // note   fragments are <> and </>
        <>
          <input
            placeholder="Update your todo"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
