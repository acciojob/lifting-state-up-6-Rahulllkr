import React from 'react'

const child = ({todos,handleComplete,todoItem}) => {
  return (
    <>
    <h1>Child Component</h1>
    <ul>
        {
            todos.map((item,index) => {
                return (
                    <div style={{display:"flex"}} key={index}>
                        <li>{item} {todoItem ? " " : <button onClick={handleComplete}>Complete</button>}</li>
                        
                    </div>
                )
            })
        }
    </ul>
    </>
  )
}

export default child