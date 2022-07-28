export default function Buttons({changeInput,clearInput,add,sub,mult,div,solve}) {

  return (
    <div className="buttons">
      <button onClick={() => clearInput()}className="btn btnClear">C</button>
      <button onClick={() => div()} className="btn btnDivide">/</button>
      <button onClick={() => mult()} className="btn btnMultiply">*</button>
      <button onClick={() => sub()} className="btn btnMinus">-</button>
      <button onClick={() => changeInput(7)} className="btn btn7">7</button>
      <button onClick={() => changeInput(8)} className="btn btn8">8</button>
      <button onClick={() => changeInput(9)} className="btn btn9">9</button>
      <button onClick={() => add()} className="btn btnPlus">+</button>
      <button onClick={() => changeInput(4)}className="btn btn4">4</button>
      <button onClick={() => changeInput(5)}className="btn btn5">5</button>
      <button onClick={() => changeInput(6)}className="btn btn6">6</button>
      <button onClick={() => changeInput(1)}className="btn btn1">1</button>
      <button onClick={() => changeInput(2)}className="btn btn2">2</button>
      <button onClick={() => changeInput(3)}className="btn btn3">3</button>
      <button onClick={() => solve()} className="btn btnEqual">=</button>
      <button onClick={() => changeInput(0)}className="btn btn0">0</button>
      <button onClick={() => changeInput('.')}className="btn btnDot">.</button>
    </div>
  )
}
