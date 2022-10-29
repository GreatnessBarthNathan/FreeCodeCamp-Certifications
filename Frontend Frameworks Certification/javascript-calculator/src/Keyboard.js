import React from "react"

function Keyboard({ id, value, handleInput }) {
  return (
    <div id={id} onClick={() => handleInput(value)}>
      {value}
    </div>
  )
}

export default Keyboard
