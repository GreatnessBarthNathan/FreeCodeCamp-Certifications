import React from "react"

function Sections() {
  return (
    <section>
      <div id='break-label'>
        <h2>Break Length</h2>
        <div className='control-container'>
          <button id='break-decrement'>dec</button>
          <h2 id='break-length'>5</h2>
          <button id='break-increment'>inc</button>
        </div>
      </div>
      <div id='session-label'>
        <h2>Session Length</h2>
        <div className='control-container'>
          <button id='session-decrement'>dec</button>
          <h2 id='session-length'>25</h2>
          <button id='session-increment'>inc</button>
        </div>
      </div>
    </section>
  )
}

export default Sections
