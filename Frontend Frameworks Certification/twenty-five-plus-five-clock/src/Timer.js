import React from "react"
import { BiReset } from "react-icons/bi"
import { CgPlayPauseO } from "react-icons/cg"
import { FiPlay } from "react-icons/fi"

function Timer() {
  const play = false
  return (
    <article>
      <h3 id='timer-label'></h3>
      <div>
        <h1 id='time-left'></h1>
      </div>
      <aside>
        <button id='start_stop'>{play ? <CgPlayPauseO /> : <FiPlay />}</button>
        <button id='reset'>
          <BiReset />
        </button>
      </aside>
    </article>
  )
}

export default Timer
