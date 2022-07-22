import { useContext } from "react";
import { ButtonsContext } from "../Buttons/ButtonsContext";
import Side from "./side";
import SideItem from "./SideItem";

export default function SideList(){
	const sideInputArr = useContext(ButtonsContext).sideInputArr
	console.log(sideInputArr);
	return (
		// <div>SideList</div>,
		sideInputArr.map((text,index) => {
		return <SideItem text={text} key={index} next = {sideInputArr[index+1]? true :false}></SideItem>
	})
	)
}