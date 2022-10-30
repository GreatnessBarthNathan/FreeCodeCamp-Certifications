import React from "react"
import Sections from "./Sections"
import Timer from "./Timer"

function App() {
  const [breakLength, setBreakLength] = React.useState(5)
  const [sessionLength, setSessionLength] = React.useState(25)
  return (
    <div id='app'>
      <div id='container'>
        <h1>25+5 Clock</h1>
        <Sections actions={{ breakLength, sessionLength }} />
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
