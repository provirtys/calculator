import { useState, useContext } from 'react'
import { InputContext } from './App'

export default function Display() {
  const [inputVal, setInputVal] = useState('Введите значение')

	const val = useContext(InputContext)

  return (
    <input
      className="input"
      placeholder={'Введите значение'}
      value={val}
      readOnly
    ></input>
  )
}
