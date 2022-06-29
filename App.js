import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [value, newValue] = useState([]);

  function handle(event) {
    const newinput = event.target.value;
    setInput(newinput);
  }
  function addValue() {
    newValue((prevItem) => {
      return [...prevItem, input];
    });
    setInput("");
  }
  return (
    <div className="container">
      <div className="Heading">
        <h1>To-do-list</h1>
      </div>
      <div className="form">
        <input onChange={handle} type="text" value={input} />
        <button onClick={addValue}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {value.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
