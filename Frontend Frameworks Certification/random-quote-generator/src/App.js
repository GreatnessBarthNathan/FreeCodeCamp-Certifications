import React, { useState, useEffect } from "react"
import QuoteContainer from "./QuoteContainer"
import { data } from "./data"

const randomNumber = Math.floor(Math.random() * data.length) + 1

function App() {
  const [quote, setQuote] = useState(data[randomNumber])

  function changeQuote() {
    const randomNumber = Math.floor(Math.random() * data.length)
    setQuote(data[randomNumber])
  }

  return (
    <div id='app'>
      <QuoteContainer quote={quote} changeQuote={changeQuote} />
    </div>
  )
}

export default App
