import { useState, useContext } from 'react'
import { AlertContext } from './App'

export default function Display() {
  const [inputVal, setInputVal] = useState('Введите значение')

	const val = useContext(AlertContext)

  return (
    <input
      className="input"
      placeholder={'Введите значение'}
      value={val}
      readOnly
    ></input>
  )
}
