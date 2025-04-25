import React from "react";

function Task({text, category, onClickDelete}) {
  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={onClickDelete} >X</button>
    </div>
  );
}

export default Task;