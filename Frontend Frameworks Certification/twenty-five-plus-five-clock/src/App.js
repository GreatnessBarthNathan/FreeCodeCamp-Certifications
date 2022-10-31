import React from "react"
import Sections from "./Sections"
import Timer from "./Timer"

function App() {
  const [breakLength, setBreakLength] = React.useState(5)
  const [sessionLength, setSessionLength] = React.useState(25)
  const [timeLeft, setTimeLeft] = React.useState(1500)
  const [play, setPlay] = React.useState(false)
  const [timingType, setTimingType] = React.useState("SESSION")

  // format time
  function formatTime() {
    let mins = Math.floor(timeLeft / 60)
    let secs = timeLeft - mins * 60
    let formattedMins = mins < 10 ? "0" + mins : mins
    let formattedSecs = secs < 10 ? "0" + secs : secs
    return `${formattedMins}:${formattedSecs}`
  }

  // create a reset timer
  function resetTimer() {
    const audio = document.getElementById("beep")
    if (!timeLeft && timingType === "SESSION") {
      setTimeLeft(breakLength * 60)
      setTimingType("BREAK")
      audio.play()
    }
    if (!timeLeft && timingType === "BREAK") {
      setTimeLeft(sessionLength * 60)
      setTimingType("SESSION")
      audio.pause()
      audio.currentTime = 0
    }
  }
  // set timeout
  let timeout = setTimeout(() => {
    if (timeLeft && play) {
      setTimeLeft(timeLeft - 1)
    }
  }, 1000)

  function startStop() {
    clearTimeout(timeout)
    setPlay(!play)
  }

  function clock() {
    if (play) {
      timeout = timeout
      resetTimer()
    } else {
      clearTimeout(timeout)
    }
  }

  // Reset time
  function handleReset() {
    clearTimeout(timeout)
    setPlay(false)
    setBreakLength(5)
    setSessionLength(25)
    setTimeLeft(1500)
    setTimingType("SESSION")
    const audio = document.getElementById("beep")
    audio.pause()
    audio.currentTime = 0
  }

  React.useEffect(() => {
    clock()
  }, [timeLeft, play, timeout])

  // increase session length
  function increaseSession() {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1)
      setTimeLeft(timeLeft + 60)
    }
  }

  // decrease session length
  function decreaseSession() {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1)
      setTimeLeft(timeLeft - 60)
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
            play,
          }}
        />
        <Timer
          actions={{ formatTime, handleReset, startStop, timingType, play }}
        />
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
