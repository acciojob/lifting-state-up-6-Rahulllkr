import React from 'react'

const child = ({todos,handleComplete}) => {
  return (
    <>
    <h1>Child Component</h1>
    <ul>
        {
            todos.map((item,index) => {
                return (
                    <div style={{display:"flex"}} key={index}>
                        <li>{item.text}</li>
                        {!item.completed && (<button onClick={() => handleComplete(index)}>Complete</button>)}
                    </div>
                )
            })
        }
    </ul>
    </>
  )
}

export default child