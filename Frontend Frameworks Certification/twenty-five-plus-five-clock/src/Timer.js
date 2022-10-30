import React from "react"

function Timer() {
  return (
    <article>
      <h3 id='timer-label'>session</h3>
      <div>
        <h1 id='time-left'>25:00</h1>
      </div>
      <aside>
        <button id='start_stop'>Start/Stop</button>
        <button id='reset'>Reset</button>
      </aside>
    </article>
  )
}

export default Timer
