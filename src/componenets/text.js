import React from "react";
import Draggable from 'react-draggable'
function Text(props){

    const [editMode,setEditMode] = React.useState(false);
    const [val,setVal] = React.useState("Double click to Edit")

    return (
        <div className="">
            <Draggable>
                {editMode?<h3><input value = {val} onDoubleClick={()=>setEditMode(false)} onChange={(e)=>setVal(e.target.value)} className="TiltWarp indent-2"></input></h3>:<h3  style={{color:props.color, fontSize:`${props.size}px`, border:2}} onDoubleClick={()=>setEditMode(true)} className="hover:cursor-pointer TiltWarp">{val}</h3>}
            </Draggable>
        </div>
    )
}

export default Text;