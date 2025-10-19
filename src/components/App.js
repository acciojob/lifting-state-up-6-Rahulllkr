
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
    setTodos(prevTodos =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: true } : todo
      )
    );
  };
  return (
    <div>
      <h1>Parent </h1>
        {/* Do not remove the main div */}
        <Child todos={todos} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
