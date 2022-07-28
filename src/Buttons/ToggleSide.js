import { useContext, useEffect, useState } from 'react'
import { ButtonsContext } from './ButtonsContext'

export default function ToggleSide() {
  const active = useContext(ButtonsContext).sideActive
  const toggle = useContext(ButtonsContext).toggleSide
  const toggleBtnClassName = active ? 'active' : ''
  const toggleBtnClasses = ['toggleSideBtn', toggleBtnClassName]

  // const [count, setCount] = useState(0)

  // setTimeout(() => {
  //   if (count < 11) {
  //     console.log(count)
  //     setCount(count + 1)
  //     console.log(active)
  //     toggle()
  //   }
  // }, 1000)

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 's') {
        toggle()
      }
    }
    document.addEventListener('keypress',listener)
    return () => {
      document.removeEventListener('keypress', listener)
    }
  }, [active])

  return (
    <div className="toggleSide">
      <div className={toggleBtnClasses.join(' ')} onClick={toggle}></div>
    </div>
  )
}
