import { createContext, useEffect, useState } from 'react'
import './App.css'
import Buttons from './Buttons/buttons'
import { ButtonsProvider } from './Buttons/ButtonsContext'
import Display from './display'
import Side from './Side/side'
import ToggleSide from './Buttons/ToggleSide'

export const InputContext = createContext()

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <ButtonsProvider>
          <div className="body">
            <Display />
            <Buttons />
            <ToggleSide/>
          </div>
          <Side />
        </ButtonsProvider>
      </div>
    </div>
  )
}

export default App
