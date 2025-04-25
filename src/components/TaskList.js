import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {
 
  let id = 0;
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {
        tasks.map((task =>{
          id += 1
          task.id = id;
          return <Task 
          key={task.id} 
          text={task.text} 
          category={task.category} 
          onClickDelete={()=>handleDelete(task.id)}/>
        }))
        
      }
    </div>
  );
}

export default TaskList;
