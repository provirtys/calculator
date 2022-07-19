import { createContext, useState } from 'react'
import './App.css'
import Buttons from './buttons'
import Display from './display'

export const AlertContext = createContext()

function App() {
  const [inputVal, setInputVal] = useState('')
  const [memorizedNumber, setMemorizedNumber] = useState(false)
  const [action, setAction] = useState(false)
  const [curAction, setCurAction] = useState('')
  const [result, setResult] = useState('')
  function changeInput(val) {
    if (action) {
      setCurAction(action)
      setAction(false)
      setMemorizedNumber(inputVal)
      setInputVal(val.toString())
    } else {
      if(val != '.' || !inputVal.includes('.')){
        setInputVal(inputVal + val.toString())
      }
    }
  }
  function clearInput() {
    setInputVal('')
    setAction(false)
    setMemorizedNumber(false)
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
    console.log(memorizedNumber);
    console.log(curAction);
    console.log(inputVal);
    let newVal = null
    switch (curAction) {
      case '+': {
        console.log("plus");
        newVal = (+memorizedNumber + +inputVal).toString()
        break
      }
      case '-': {
        console.log("minus");

        newVal = (+memorizedNumber - +inputVal).toString()
        break
      }
      case '*': {
        console.log("mult");

        newVal = (+memorizedNumber * +inputVal).toString()
        break
      }
      case '/': {
        console.log("divide");

        newVal = (+memorizedNumber / +inputVal).toString()
        break
      }
    }
    setInputVal(newVal)
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="body">
          <AlertContext.Provider value={inputVal}>
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
          </AlertContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default App
