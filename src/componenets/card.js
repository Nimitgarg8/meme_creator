import React from "react";
import { useNavigate } from "react-router-dom";
function MemeCard(props) {

    const navigate = useNavigate();

  return (
        <div key={props.id} className='w-80 mx-3 outline outline-slate-100 shadow-lg shadow-slate-300 pb-1 my-3 border border-slate-500 bg-white rounded-md'>
            <img src={props.img} alt='' className='w-64 h-64 mx-8 my-4 rounded-md'></img>
            <div className='h-9'>
                <p className="text-center align-middle text-lg px-3 Nixie font-bold tracking-wider">{props.title}</p>
            </div>
            <div className='flex justify-center mb-3 mt-4'>
                   <button className="bg-green-300 px-4 h-9 rounded-md text-xl Vesper pt-2 pb-1 hover:bg-green-500 outline outline-green-400" onClick={(e)=>navigate(`/edit?url=${props.img}`)}>Edit</button>                 
            </div>
        </div>
  );
}

export default MemeCard;