import React from "react"
import { FaArrowUp, FaArrowDown } from "react-icons/fa"

function Sections() {
  return (
    <section>
      <div id='break-label'>
        <h2>Break Length</h2>
        <div className='control-container'>
          <button id='break-decrement'>
            <FaArrowDown />
          </button>
          <h2 id='break-length'></h2>
          <button id='break-increment'>
            <FaArrowUp />
          </button>
        </div>
      </div>
      <div id='session-label'>
        <h2>Session Length</h2>
        <div className='control-container'>
          <button id='session-decrement'>
            <FaArrowDown />
          </button>
          <h2 id='session-length'></h2>
          <button id='session-increment'>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sections
