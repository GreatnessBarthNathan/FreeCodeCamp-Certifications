import React, { useState, useEffect } from "react"
import { data, numbers, operators } from "./data"
import Display from "./Display"
import Keyboard from "./Keyboard"

function App() {
  const [input, setInput] = useState(0)
  const [output, setOutput] = useState("")
  const [calculatorData, setCalculatorData] = useState("")

  // handle submit
  function handleEquals() {
    const total = eval(calculatorData)
    setInput(`${total}`)
    setOutput(`${total}`)
    setCalculatorData(`${total}`)
  }

  // handle clear
  function handleClear() {
    setOutput("")
    setInput("0")
    setCalculatorData("")
  }

  // handle numbers
  function handleNumbers(value) {
    if (!calculatorData.length) {
      setInput(`${value}`)
      setCalculatorData(`${value}`)
    } else {
      if (value === 0 && (calculatorData === "0" || input === "0")) {
        setCalculatorData(`${calculatorData}`)
      } else {
        const last = calculatorData.charAt(calculatorData.length - 1)
        const isLastOperator = last === "*" || operators.includes(last)
        setInput(isLastOperator ? `${value}` : `${input}${value}`)
        setCalculatorData(`${calculatorData}${value}`)
      }
    }
  }

  // handle decimal
  function handleDecimal() {
    const last = calculatorData.charAt(calculatorData.length - 1)
    if (!calculatorData.length) {
      setInput("0.")
      setCalculatorData("0.")
    } else {
      if (last === "*" || operators.includes(last)) {
        setInput("0.")
        setCalculatorData(`${calculatorData} 0.`)
      } else {
        setInput(last === "." || input.includes(".") ? `${input}` : `${input}.`)
        const formattedValue =
          last === "." || input.includes(".")
            ? `${calculatorData}`
            : `${calculatorData}.`
        setCalculatorData(formattedValue)
      }
    }
  }

  // handle operators
  function handleOperators(value) {
    if (calculatorData.length) {
      setInput(`${value}`)
      const beforeLastChat = calculatorData.charAt(calculatorData.length - 2)

      const beforeLastChatIsOperator =
        operators.includes(beforeLastChat) || beforeLastChat === "*"

      const lastChat = calculatorData.charAt(calculatorData.length - 1)

      const lastChatIsOperator =
        operators.includes(lastChat) || lastChat === "*"

      const validOp = value === "x" ? "*" : value
      if (
        (lastChatIsOperator && value !== "-") ||
        (beforeLastChatIsOperator && lastChatIsOperator)
      ) {
        if (beforeLastChatIsOperator) {
          const updatedValue = `${calculatorData.substring(
            0,
            calculatorData.length - 2
          )}${value}`
          setCalculatorData(updatedValue)
        } else {
          setCalculatorData(
            `${calculatorData.substring(
              0,
              calculatorData.length - 1
            )}${validOp}`
          )
        }
      } else {
        setCalculatorData(`${calculatorData}${validOp}`)
      }
    }
  }

  // handle input
  function handleInput(value) {
    const number = numbers.find((num) => num === value)
    const operator = operators.find((opr) => opr === value)

    switch (value) {
      case "=":
        handleEquals()
        break
      case "AC":
        handleClear()
        break
      case number:
        handleNumbers(value)
        break
      case ".":
        handleDecimal()
        break
      case operator:
        handleOperators(value)
        break
      default:
        break
    }
  }

  //handle output
  function handleOuput() {
    setOutput(calculatorData)
  }
  useEffect(() => {
    handleOuput()
  }, [calculatorData])
  return (
    <div id='wrapper'>
      <div className='container'>
        <Display input={input} output={output} />
        <div id='buttons'>
          {data.map((button) => (
            <Keyboard key={button.id} {...button} handleInput={handleInput} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
