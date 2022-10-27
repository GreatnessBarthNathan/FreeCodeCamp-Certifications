import React, { useState, useEffect } from "react"
import { data } from "./data"
import SinglePad from "./SinglePad"

function App() {
  const [display, setDisplay] = useState("Heater 1")

  return (
    <div id='wrapper'>
      <main id='drum-machine'>
        <div id='pad-container'>
          {data.map((item) => (
            <SinglePad
              key={item.id}
              {...item}
              setDisplay={setDisplay}
            />
          ))}
        </div>
        <div id='display'>{display}</div>
      </main>
    </div>
  )
}

export default App
