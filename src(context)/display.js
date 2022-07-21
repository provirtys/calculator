import { useState, useContext } from 'react'
import { ButtonsContext } from './Buttons/ButtonsContext'

export default function Display() {

  const funcs = useContext(ButtonsContext)

  return (
    <input
      className="input"
      placeholder={'Введите значение'}
      value={funcs.input}
      readOnly
    ></input>
  )
}
