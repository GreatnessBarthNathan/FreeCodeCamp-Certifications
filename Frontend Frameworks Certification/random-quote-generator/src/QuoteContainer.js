import React from "react"

function QuoteContainer({ quote, changeQuote }) {
  const { text, author } = quote

  return (
    <div id='quote-box'>
      <p id='text'>"{text}"</p>
      <p id='author'>- {author}</p>
      <div id='buttons'>
        <a
          href='https://twitter.com/intent/tweet'
          id='tweet-quote'
          target='_blank'
        >
          tweet quote
        </a>
        <button id='new-quote' onClick={changeQuote}>
          new quote
        </button>
      </div>
    </div>
  )
}

export default QuoteContainer
