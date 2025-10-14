
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a React app", completed: false },
    { text: "Deploy the React app", completed: false }
  ]);
  const handleComplete = (index) => {
    const updatedTodo = todos.map((item,itemIndex) => 
      index === itemIndex ? {...item,completed:true}: item
    )
    setTodos(updatedTodo)
  }
  return (
    <div>
      <h1>Parent Component</h1>
        {/* Do not remove the main div */}
        <Child todos={todos} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
