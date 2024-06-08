import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function appendChanges() {
    setList((prevItems) => {
      return [...prevItems, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={appendChanges}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((val) => {
            return <li>{val}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
