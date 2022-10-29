import React from "react"

function Display({ input, output }) {
  return (
    <div className='output'>
      <span className='result'>{output}</span>
      <span id='display'>{input}</span>
    </div>
  )
}

export default Display
