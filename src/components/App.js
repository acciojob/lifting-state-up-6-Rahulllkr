
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./child";

const App = () => {
  const [todoItem,setTodoItem] = useState(false)
  const [todos,setTodos] = useState([
    "Learn React",
    "Build a React app",
    "Deploy the React app"
  ])
  const handleComplete = () => {
    setTodoItem(false)
  }
  return (
    <div>
      <h1>Parent Component</h1>
        {/* Do not remove the main div */}
        <Child todos={todos} todoItem={todoItem} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
