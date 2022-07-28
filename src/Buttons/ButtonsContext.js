import { createContext, useState, useEffect, useRef } from 'react'

export const ButtonsContext = createContext()

export const ButtonsProvider = ({ children }) => {
  const [inputVal, setInputVal] = useState('')
  const [firstNumber, setFirstNumber] = useState(false)
  const [secondNumber, setSecondNumber] = useState(false)
  const [action, setAction] = useState(false)
  const [curAction, setCurAction] = useState(false)
  const [sideInput,setSideInput] = useState('')
  const [sideInputArr, setSideInputArr] = useState([''])
  const [sideActive, setSideActive] = useState(false)

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
        case '-':
        case '*':
        case '/':
          chooseAction(event.key)
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
      setSideInput(sideInput + val.toString())
      sideInputArr[sideInputArr.length-1] += val.toString()
    } else {
      if (val != '.' || !inputVal.includes('.')) {
        setAction(false)
        // setCurAction(false)
        setInputVal(inputVal + val.toString())
        setSideInput(sideInput + val.toString())
        sideInputArr[sideInputArr.length-1] += val.toString()
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
    setFirstNumber(false)
    setSecondNumber(false)
    setAction(false)
    setCurAction(false)
    setSideInput('')
    setSideInputArr([''])
  }
  function chooseAction(act) {
    setAction(act)
    if(action){
      setSideInput(sideInput.substring(0,sideInput.length-3) + ` ${act} `)
      sideInputArr[sideInputArr.length-1] = firstNumber + ` ${act} `


    }
    else{
      setSideInput(sideInput + ` ${act} `)
      sideInputArr[sideInputArr.length-1] = firstNumber + ` ${act} `

    }

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
    newVal = Math.round(newVal * 100)/100
    setInputVal(newVal)
    setFirstNumber(newVal)
    setSideInput(sideInput + ' = ' + newVal)
    sideInputArr[sideInputArr.length-1] = firstNumber +  ` ${curAction} ` + secondNumber + ' = ' + newVal
    setSideInput('')
    sideInputArr.push('')
    
  }

  function toggleSide(){
    setSideActive(prev => !prev)
  }

  return (
    <ButtonsContext.Provider
      value={{
        input: inputVal,
        changeInput,
        clearInput,
        chooseAction,
        solve,
        sideInput,
        sideInputArr,
        sideActive,
        toggleSide,
      }}
    >
      {children}
    </ButtonsContext.Provider>
  )
}
