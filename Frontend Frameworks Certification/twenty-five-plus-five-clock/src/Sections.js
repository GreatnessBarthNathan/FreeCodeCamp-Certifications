import React from "react"

function Sections({ actions }) {
  const {
    breakLength,
    sessionLength,
    increaseSession,
    decreaseSession,
    increaseBreak,
    decreaseBreak,
    play,
  } = actions
  return (
    <section>
      <div id='break-label'>
        <h2>Break Length</h2>
        <div className='control-container'>
          <button disabled={play} id='break-decrement' onClick={decreaseBreak}>
            dec
          </button>
          <h2 id='break-length'>{breakLength}</h2>
          <button disabled={play} id='break-increment' onClick={increaseBreak}>
            inc
          </button>
        </div>
      </div>
      <div id='session-label'>
        <h2>Session Length</h2>
        <div className='control-container'>
          <button
            disabled={play}
            id='session-decrement'
            onClick={decreaseSession}
          >
            dec
          </button>
          <h2 id='session-length'>{sessionLength}</h2>
          <button
            disabled={play}
            id='session-increment'
            onClick={increaseSession}
          >
            inc
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sections
