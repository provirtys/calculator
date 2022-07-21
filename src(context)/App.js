import { createContext, useEffect, useState } from 'react'
import './App.css'
import Buttons from './Buttons/buttons'
import { ButtonsProvider } from './Buttons/ButtonsContext'
import Display from './display'

export const InputContext = createContext()

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="body">
          <ButtonsProvider>
              <Display />
              <Buttons />
          </ButtonsProvider>
        </div>
      </div>
    </div>
  )
}

export default App
