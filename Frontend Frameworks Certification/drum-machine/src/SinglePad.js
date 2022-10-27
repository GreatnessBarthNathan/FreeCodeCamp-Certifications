import React, { useRef, useEffect } from "react"

function SinglePad({ id, src, text, setDisplay, playSound }) {
  function playSound(id) {
    setDisplay(text)
    const audio = document.getElementById(id)
    audio.play()
  }

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playSound(e.key.toUpperCase())
    })
  }, [])

  return (
    <button className='drum-pad' id={src} onClick={() => playSound(id)}>
      {id}
      <audio src={src} id={id} className='clip'></audio>
    </button>
  )
}

export default SinglePad
