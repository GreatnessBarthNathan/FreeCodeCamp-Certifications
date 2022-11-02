import React, { useState, useEffect } from "react"
import Sections from "./Sections"
import Timer from "./Timer"

function App() {
  const [sessionLength, setSessionLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5)
  const [timingType, setTimingType] = useState("SESSION")
  const [timeLeft, setTimeLeft] = useState(1500)
  const [play, setPlay] = useState(false)
  const audio = document.getElementById("beep")
  // set time format
  function formatTime() {
    let mins = Math.floor(timeLeft / 60)
    let secs = timeLeft - mins * 60
    let minsFormat = mins < 10 ? "0" + mins : mins
    let secsFormat = secs < 10 ? "0" + secs : secs
    return `${minsFormat}:${secsFormat}`
  }

  // increase session
  function increaseSession() {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1)
      setTimeLeft(timeLeft + 60)
    }
  }

  // decrease session
  function decreaseSession() {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1)
      setTimeLeft(timeLeft - 60)
    }
  }

  // increase break
  function increaseBreak() {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1)
    }
  }

  // decrease break
  function decreaseBreak() {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1)
    }
  }

  // set timeout
  let timeout = setTimeout(() => {
    if (timeLeft && play) {
      setTimeLeft(timeLeft - 1)
    }
  }, 1000)

  // set the sessions
  function regulateTimer() {
    // const audio = document.getElementById("beep")
    if (!timeLeft && timingType === "SESSION") {
      setTimingType("BREAK")
      setTimeLeft(breakLength * 60)
      audio.play()
      console.log(audio)
    }
    if (!timeLeft && timingType === "BREAK") {
      setTimingType("SESSION")
      setTimeLeft(sessionLength * 60)
      audio.pause()
      audio.currentTime = 0
    }
  }

  function handlePause() {
    clearTimeout(timeout)
    setPlay(!play)
  }

  // set clock
  function clock() {
    if (play) {
      timeout = timeout
      regulateTimer()
    } else {
      clearTimeout(timeout)
    }
  }
  // reset all time
  function handleReset() {
    clearTimeout(timeout)
    setPlay(false)
    setBreakLength(5)
    setSessionLength(25)
    setTimeLeft(1500)
    setTimingType("SESSION")
    const audio = document.getElementById("beep")
    audio.currentTime = 0
  }

  useEffect(() => {
    clock()
  }, [timeLeft, play, timeout])

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
          actions={{ formatTime, timingType, handleReset, handlePause, play }}
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
