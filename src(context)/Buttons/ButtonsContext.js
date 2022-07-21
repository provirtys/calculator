import { createContext, useState, useEffect, useRef } from 'react'

export const ButtonsContext = createContext()

export const ButtonsProvider = ({ children }) => {
  const [inputVal, setInputVal] = useState('')
  const [firstNumber, setFirstNumber] = useState(false)
  const [secondNumber, setSecondNumber] = useState(false)
  const [action, setAction] = useState(false)
  const [curAction, setCurAction] = useState('')

console.log(inputVal,firstNumber,secondNumber,action,curAction);

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
    if (action) {
      setCurAction(action)
      setAction(false)
      setInputVal(val.toString())
      setSecondNumber(val)
    } else {
      if (val != '.' || !inputVal.includes('.')) {
        setAction(false)
        setInputVal(inputVal + val.toString())
        if (curAction == '') {
          setFirstNumber(inputVal + val.toString())
        } else {
          setSecondNumber(inputVal + val.toString())
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
    <ButtonsContext.Provider
      value={{
        input: inputVal,
        changeInput,
        clearInput,
        add,
        sub,
        mult,
        div,
        solve,
      }}
    >
      {children}
    </ButtonsContext.Provider>
  )
}
