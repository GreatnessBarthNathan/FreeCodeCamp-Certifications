import React from "react"
import { BiReset } from "react-icons/bi"
import { CgPlayPauseO } from "react-icons/cg"
import { FiPlay } from "react-icons/fi"

function Timer({ actions }) {
  const { formatTime, timingType, handleReset, handlePause, play } = actions

  return (
    <article>
      <h3 id='timer-label'>{timingType}</h3>
      <div>
        <h1 id='time-left'>{formatTime()}</h1>
      </div>
      <aside>
        <button id='start_stop' onClick={handlePause}>
          {play ? <CgPlayPauseO /> : <FiPlay />}
        </button>
        <button id='reset' onClick={handleReset}>
          <BiReset />
        </button>
      </aside>
    </article>
  )
}

export default Timer
