import { createContext, useEffect, useState } from 'react'
import './App.css'
import Buttons from './buttons'
import Display from './display'

export const InputContext = createContext()

function App() {
  const [inputVal, setInputVal] = useState('')
  const [firstNumber, setFirstNumber] = useState(false)
  const [secondNumber, setSecondNumber] = useState(false)
  const [action, setAction] = useState(false)
  const [curAction, setCurAction] = useState('')

  useEffect(() => {
    const listener = (event) => {
      switch (event.key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
          changeInput(event.key)
          break
        case 'Escape':
          clearInput()
          break
        case '+':
          add()
          break
        case '-':
          sub()
          break
        case '*':
          mult()
          break
        case '/':
          div()
          break
        case 'Enter':
          solve()
          break
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [inputVal, action])

  function changeInput(val) {
    // console.log(firstNumber);
    // console.log(secondNumber);
    if (action) {
      setCurAction(action)
      setAction(false)
      setInputVal(val.toString())
      setSecondNumber(val)
      // console.log('second number:', val.toString())
    } else {
      if (val != '.' || !inputVal.includes('.')) {
        setAction(false)
        setInputVal(inputVal + val.toString())
        if (curAction == '') {
          setFirstNumber(inputVal + val.toString())
          // console.log('first number:', inputVal + val.toString())
        } else {
          setSecondNumber(inputVal + val.toString())
          // console.log('second number:', inputVal + val.toString())
        }
      }
    }
  }
  function clearInput() {
    setInputVal('')
    setFirstNumber('')
    setSecondNumber('')
    setAction(false)
    setCurAction(false)
  }
  function add() {
    setAction('+')
  }
  function sub() {
    setAction('-')
  }
  function mult() {
    setAction('*')
  }
  function div() {
    setAction('/')
  }
  function solve() {
    console.log(firstNumber);
    console.log(secondNumber);
    let newVal = null
    switch (curAction) {
      case '+': {
        newVal = (+firstNumber + +secondNumber).toString()
        break
      }
      case '-': {
        newVal = (+firstNumber - +secondNumber).toString()
        break
      }
      case '*': {
        newVal = (+firstNumber * +secondNumber).toString()
        break
      }
      case '/': {
        newVal = (+firstNumber / +secondNumber).toString()
        break
      }
      default: {
        newVal = inputVal
        break
      }
    }
    setInputVal(newVal)
    setFirstNumber(newVal)
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="body">
          <InputContext.Provider value={inputVal}>
            <Display />
            <Buttons
              changeInput={changeInput}
              clearInput={clearInput}
              add={add}
              sub={sub}
              mult={mult}
              div={div}
              solve={solve}
            />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default App
