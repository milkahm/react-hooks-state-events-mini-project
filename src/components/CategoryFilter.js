import React from "react";

function CategoryFilter({categories, setFilter}) {

  function handleClick(event){
    setFilter(this)
    clearSelection()
    event.target.classList.add("selected")
  }

  function clearSelection(){
    if (document.querySelector(".selected"))
    {
      document.querySelector(".selected")
      .classList.remove("selected")
    }
      
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {
        categories.map(category=>{
          return <button className="" key={category} onClick={handleClick.bind(category)} >
            {category}
          </button>
        })
      }
    </div>
  );
}

export default CategoryFilter;