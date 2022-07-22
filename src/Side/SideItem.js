export default function SideItem({text,index,next}) {
	if(next){
		return (
			<div>
      {text}
      <hr />
    </div>
		)
	}
	else{
		return (
			<div>
				{text}
			</div>
		)
	}
 
}
