import React from "react"

function Timer({ actions }) {
  const { formatTime, reset, startStop } = actions
  return (
    <article>
      <h3 id='timer-label'>session</h3>
      <div>
        <h1 id='time-left'>{formatTime()}</h1>
      </div>
      <aside>
        <button id='start_stop' onClick={startStop}>
          Start/Stop
        </button>
        <button id='reset' onClick={reset}>
          Reset
        </button>
      </aside>
    </article>
  )
}

export default Timer
