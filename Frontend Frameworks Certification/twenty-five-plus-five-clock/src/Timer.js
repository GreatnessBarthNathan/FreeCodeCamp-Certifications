import React from "react"

function Timer({ actions }) {
  const { title, handlePlay, handleReset, timeFormatter } = actions
  return (
    <article>
      <h3 id='timer-label'>{title}</h3>
      <div>
        <h1 id='time-left'>{timeFormatter()}</h1>
      </div>
      <aside>
        <button id='start_stop' onClick={handlePlay}>
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
