import React from "react"

function Timer({ actions }) {
  const { formatTime, handleReset, startStop, timingType } = actions
  return (
    <article>
      <h3 id='timer-label'>{timingType}</h3>
      <div>
        <h1 id='time-left'>{formatTime()}</h1>
      </div>
      <aside>
        <button id='start_stop' onClick={startStop}>
          Start/Stop
        </button>
        <button id='reset' onClick={handleReset}>
          Reset
        </button>
      </aside>
    </article>
  )
}

export default Timer
