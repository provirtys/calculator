import { useContext } from 'react'
import { ButtonsContext } from '../Buttons/ButtonsContext'
import SideList from './SideList'

export default function Side() {
  const side = document.getElementsByClassName('side')[0]

  const sideInput = useContext(ButtonsContext).sideInput
  const sideInputArr = useContext(ButtonsContext).sideInputArr

  const sideActive = useContext(ButtonsContext).sideActive
  if (sideActive) {
    if (sideInputArr[0].length) {
      return (
        <div className="side active">
          <SideList />
        </div>
      )
    } else {
      return <div className="side active">Список пуст</div>
    }
  }
	else{
		return (
			<div className="side">
				<SideList />
			</div>
		)
	}
}
