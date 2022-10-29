import React from "react"

function Sections({ actions }) {
  const {
    handleBreakIncrease,
    handleBreakDecrease,
    handleSessionIncrease,
    handleSessionDecrease,
    breakLength,
    sessionLength,
    play,
  } = actions
  return (
    <section>
      <div id='break-label'>
        <h2>Break Length</h2>
        <div className='control-container'>
          <button
            disabled={play}
            id='break-decrement'
            onClick={handleBreakDecrease}
          >
            dec
          </button>
          <h2 id='break-length'>{breakLength}</h2>
          <button
            disabled={play}
            id='break-increment'
            onClick={handleBreakIncrease}
          >
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
            onClick={handleSessionDecrease}
          >
            dec
          </button>
          <h2 id='session-length'>{sessionLength}</h2>
          <button
            disabled={play}
            id='session-increment'
            onClick={handleSessionIncrease}
          >
            inc
          </button>
        </div>
      </div>
    </section>
  )
}

export default Sections
