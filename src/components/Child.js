import React from 'react'

const Child = ({todos,handleComplete}) => {
  return (
    <>
    <h1>Child Component</h1>
    <ul>
        {
            todos.map((item,index) => {
                return (
                    <div style={{display:"flex"}} key={index}>
                        <li>
                            {item.text}
                            {!item.completed && (<button onClick={() => handleComplete(index)}>Complete</button>)}
                        </li>
                    </div>
                )
            })
        }
    </ul>
    </>
  )
}

export default Child