import React from "react"
import Sections from "./Sections"
import Timer from "./Timer"

function App() {
  const [breakLength, setBreakLength] = React.useState(5)
  const [sessionLength, setSessionLength] = React.useState(25)
  const [play, setPlay] = React.useState(false)
  const [timingType, setTimingType] = React.useState("SESSION")
  const [timeLeft, setTimeLeft] = React.useState(1500)

  // format time
  function timeFormatter() {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft - minutes * 60
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes
    return `${formattedMinutes}:${formattedSeconds}`
  }

  // set timeout
  let timeout = setTimeout(() => {
    if (timeLeft && play) {
      setTimeLeft(timeLeft - 1)
    }
  }, 1000)

  // handle play
  function handlePlay() {
    clearTimeout(timeout())
    setPlay(!play)
  }

  // reset timer
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

  function clock() {
    if (play) {
      timeout = timeout
      resetTimer()
    } else {
      clearTimeout(timeout)
    }
  }

  // handle reset
  function handleReset() {
    clearTimeout(timeout)
    setPlay(false)
    setTimeLeft(1500)
    setBreakLength(5)
    setSessionLength(25)
    setTimingType("SESSION")
    const audio = document.getElementById("beep")
    audio.pause()
    audio.currentTime = 0
  }

  React.useEffect(() => {
    clock()
  }, [play, timeLeft, timeout])

  // increase break length
  function handleBreakIncrease() {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1)
    }
  }
  // decrease break length
  function handleBreakDecrease() {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1)
    }
  }
  function handleSessionIncrease() {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1)
      setTimeLeft(timeLeft + 60)
    }
  }
  function handleSessionDecrease() {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1)
      setTimeLeft(timeLeft - 60)
    }
  }
  // set title
  const title = timingType === "SESSION" ? "Session" : "Break"

  return (
    <div id='app'>
      <div id='container'>
        <h1>25+5 Clock</h1>
        <Sections
          actions={{
            handleBreakDecrease,
            handleBreakIncrease,
            handleSessionIncrease,
            handleSessionDecrease,
            breakLength,
            sessionLength,
            play,
          }}
        />
        <Timer actions={{ title, handlePlay, handleReset, timeFormatter }} />
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
