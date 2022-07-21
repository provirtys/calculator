import { useContext } from "react"
import { ButtonsContext } from "./ButtonsContext"

export default function Buttons() {
  const funcs= useContext(ButtonsContext)
  return (
    <div className="buttons">
      <button onClick={() => funcs.clearInput()}className="btn btnClear">C</button>
      <button onClick={() => funcs.div()} className="btn btnDivide">/</button>
      <button onClick={() => funcs.mult()} className="btn btnMultiply">*</button>
      <button onClick={() => funcs.sub()} className="btn btnMinus">-</button>
      <button onClick={() => funcs.changeInput(7)} className="btn btn7">7</button>
      <button onClick={() => funcs.changeInput(8)} className="btn btn8">8</button>
      <button onClick={() => funcs.changeInput(9)} className="btn btn9">9</button>
      <button onClick={() => funcs.add()} className="btn btnPlus">+</button>
      <button onClick={() => funcs.changeInput(4)}className="btn btn4">4</button>
      <button onClick={() => funcs.changeInput(5)}className="btn btn5">5</button>
      <button onClick={() => funcs.changeInput(6)}className="btn btn6">6</button>
      <button onClick={() => funcs.changeInput(1)}className="btn btn1">1</button>
      <button onClick={() => funcs.changeInput(2)}className="btn btn2">2</button>
      <button onClick={() => funcs.changeInput(3)}className="btn btn3">3</button>
      <button onClick={() => funcs.solve()} className="btn btnEqual">=</button>
      <button onClick={() => funcs.changeInput(0)}className="btn btn0">0</button>
      <button onClick={() => funcs.changeInput('.')}className="btn btnDot">.</button>
    </div>
  )
}
