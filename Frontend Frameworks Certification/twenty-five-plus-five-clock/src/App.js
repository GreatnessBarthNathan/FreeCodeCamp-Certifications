import React from "react"
import Sections from "./Sections"
import Timer from "./Timer"

function App() {
  return (
    <div id='app'>
      <div id='container'>
        <h1>25+5 Clock</h1>
        <Sections />
        <Timer />
      </div>
      <audio
        id='beep'
        preload='auto'
        src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
      ></audio>
    </div>
  )
}

export default App
