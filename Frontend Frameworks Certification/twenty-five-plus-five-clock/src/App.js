import React from "react"
import Sections from "./Sections"
import Timer from "./Timer"

function App() {
  const [breakLength, setBreakLength] = React.useState(5)
  const [sessionLength, setSessionLength] = React.useState(25)
  const [timeLeft, setTimeLeft] = React.useState(1500)
  const [play, setPlay] = React.useState(false)
  console.log(play)
  // format time
  function formatTime() {
    let mins = Math.floor(timeLeft / 60)
    let secs = timeLeft - mins * 60
    let formattedMins = mins < 10 ? "0" + mins : mins
    let formattedSecs = secs < 10 ? "0" + secs : secs
    return `${formattedMins}:${formattedSecs}`
  }

  function startStop() {
    setPlay(!play)
  }
  function count() {
    let interval
    if (play) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
  }

  React.useEffect(() => {
    count()
  }, [timeLeft, play])
  // Reset time
  function reset() {
    setBreakLength(5)
    setSessionLength(25)
    setTimeLeft(1500)
  }

  // increase session length
  function increaseSession() {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1)
    }
  }

  // decrease session length
  function decreaseSession() {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1)
    }
  }

  // increase breaklength
  function increaseBreak() {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1)
    }
  }

  // decrease break length
  function decreaseBreak() {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1)
    }
  }
  return (
    <div id='app'>
      <div id='container'>
        <h1>25+5 Clock</h1>
        <Sections
          actions={{
            breakLength,
            sessionLength,
            increaseSession,
            decreaseSession,
            increaseBreak,
            decreaseBreak,
          }}
        />
        <Timer actions={{ formatTime, reset, startStop }} />
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
