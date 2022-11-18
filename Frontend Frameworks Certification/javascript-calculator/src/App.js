import React from "react"
import { BsArrowRight } from "react-icons/bs"

function App() {
  let [input, setInput] = React.useState("0")
  const [output, setOutput] = React.useState("")
  const [allowDec, setAllowDec] = React.useState(true)

  // handle clear
  function handleClear() {
    setInput("0")
    setOutput("")
    setAllowDec(true)
  }

  // handle number
  function handleNumber(e) {
    if (input === "0") {
      setInput(e.target.innerText)
    }
    if (input !== "0") {
      setInput((input += e.target.innerText))
    }
  }

  // handle operator
  function handleOperator(e) {
    let operator = e.target.innerText
    operator = operator === "x" ? "*" : operator
    let last = input.charAt(input.length - 1)
    let before = input.charAt(input.length - 2)
    let lastIsOpr = last === "*" || last === "+" || last === "-" || last === "/"
    let beforeIsOpr =
      before === "*" || before === "+" || before === "-" || before === "/"

    if (!lastIsOpr) {
      setInput(input + operator)
    }
    if (lastIsOpr) {
      let result = input.slice(0, input.length - 1)
      setInput(result + operator)
    }
    if (lastIsOpr && operator === "-") {
      setInput(input + "-")
    }
    if (lastIsOpr && last === "-" && operator === "-") {
      setInput(input)
    }
    if (beforeIsOpr && last === "-" && operator === "-") {
      setInput(input)
    }
    if (beforeIsOpr && last === "-" && operator !== "-") {
      let result = input.slice(0, input.length - 2)
      setInput(result + operator)
      console.log(result)
    }
    setAllowDec(true)
  }

  // handle equals
  function handleEquals() {
    // THIS IS WHEN YOU WANT EQUALS TO REMOVE ANY OPERATORS IN FRONT
    // let result = ""
    // let last = input.charAt(input.length - 1)
    // let before = input.charAt(input.length - 2)
    // let isOperator =
    //   last === "*" || last === "+" || last === "-" || last === "/"
    // let beforeIsOpr =
    //   before === "*" || before === "+" || before === "-" || before === "/"
    // if (isOperator && !beforeIsOpr) {
    //   result = input.slice(0, input.length - 1)
    //   result = eval(result)
    // }
    // if (isOperator && beforeIsOpr) {
    //   result = input.slice(0, input.length - 2)
    //   result = eval(result)
    // }
    let result = eval(input)
    result = result.toString()
    setInput(result)
    setOutput(result)
  }

  // handle decimal
  function handleDecimal(e) {
    if (allowDec) {
      if (input === "0" || input === "") {
        setInput("0.")
      } else if (input.charAt(input.length - 1) === ".") {
        setInput(input)
      } else {
        setInput((input += e.target.innerText))
      }
    }
    setAllowDec(false)
  }
  return (
    <div id='wrapper'>
      <div id='container'>
        <div id='results'>
          <h2 id='output'>{output}</h2>
          <h2 id='display'>{input}</h2>
        </div>
        <div id='buttons'>
          <button id='clear' onClick={handleClear}>
            AC
          </button>
          <button id='divide' onClick={handleOperator}>
            /
          </button>
          <button id='multiply' onClick={handleOperator}>
            x
          </button>
          <button id='seven' onClick={handleNumber}>
            7
          </button>
          <button id='eight' onClick={handleNumber}>
            8
          </button>
          <button id='nine' onClick={handleNumber}>
            9
          </button>
          <button id='subtract' onClick={handleOperator}>
            -
          </button>
          <button id='four' onClick={handleNumber}>
            4
          </button>
          <button id='five' onClick={handleNumber}>
            5
          </button>
          <button id='six' onClick={handleNumber}>
            6
          </button>
          <button id='add' onClick={handleOperator}>
            +
          </button>
          <button id='one' onClick={handleNumber}>
            1
          </button>
          <button id='two' onClick={handleNumber}>
            2
          </button>
          <button id='three' onClick={handleNumber}>
            3
          </button>
          <button id='equals' onClick={handleEquals}>
            =
          </button>
          <button id='zero' onClick={handleNumber}>
            0
          </button>
          <button id='decimal' onClick={handleDecimal}>
            .
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
