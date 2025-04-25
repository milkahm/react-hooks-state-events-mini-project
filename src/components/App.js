import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState(TASKS)

  function handleDelete(id){
    setTasks(tasks.filter(task=>task.id !== id))
  }
  const filterdtasks = tasks.filter(task=>{
    if(filter === "All"){
      return true
    }else{
      return task.category === filter
    }
  })

  function addToList(newTask){
    setTasks([...tasks,newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setFilter={setFilter} />
      <NewTaskForm 
      onTaskFormSubmit={addToList} 
      categories={CATEGORIES}
      />
      <TaskList tasks={filterdtasks} handleDelete={handleDelete} />
    </div>
  );
}
export default App;