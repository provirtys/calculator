import { useContext } from "react";
import { ButtonsContext } from "../Buttons/ButtonsContext";
import SideList from "./SideList";

export default function Side(){

	const side = document.getElementsByClassName('side')[0]
	// console.log(side);

	const sideInput = useContext(ButtonsContext).sideInput
	const sideInputArr = useContext(ButtonsContext).sideInputArr
if(sideInputArr.length){
	return (
		<div className="side">
			{/* {sideInput} */}
			{/* {sideInputArr} */}
			<SideList/>
		</div>
	)
}else{
	return (
		<div className="side">
			Список пуст
		</div>
	)
}


}