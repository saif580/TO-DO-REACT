import React from "react";

function App() {
  const [toDo, setTodo] = React.useState([]);
  const [item, add] = React.useState("");

  function addValue(e) {
    const newInput = e.target.value;
    add(newInput);
  }
  function addTask() {
    setTodo((preValue) => {
      return [...preValue, item];
    });
    add("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={addValue} type="text" name="addItem" value={item} />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDo.map((i) => {
            return <li key={i.toString()}>{i}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
