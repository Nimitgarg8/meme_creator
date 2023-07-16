import React from "react"
import { useSearchParams } from "react-router-dom"
import Text from './componenets/text'
import { exportComponentAsJPEG } from "react-component-export-image";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css'
import { Cropper, getCroppedImg } from 'react-cropper-custom';
import "react-cropper-custom/dist/index.css";

function EditPage(){

    const memeRef = React.createRef();

    const [Params] = useSearchParams();

    const [count,setCount] = React.useState(0);

    const [show,setShow] = React.useState(false);

    function addText(){
        setCount(count+1)
        setShow(true);
    }

    const [color,setColor] = React.useState("");

    const [size,setSize] = React.useState();

    const [img, setImg] = React.useState(Params.get("url"));
    const [aspect, setAspect] = React.useState(1);

    const onCropComplete = async (croppedArea) => {
    try {
      const image = await getCroppedImg(Params.get("url"), croppedArea, { width: 600, height: 600 * aspect });
      setImg(image);
    } catch (e) {
      console.error(e);
    }
  };

    return(
        <div className="my-5">
            <div  ref={memeRef}>
                <div className="flex justify-center">
                    <Cropper src={Params.get("url")}
                        width={600}
                        height={600}
                        aspect={aspect}
                        onCropComplete={onCropComplete}
                    />
                </div>
                <div className="text-center">
                    {
                        Array(count).fill(0).map(e => <Text color={color} size={size}/>)
                    }
                </div>
            </div>
            <div className="flex justify-center space-x-5 mb-10 mt-5">
                <button className="bg-indigo-300 px-4 h-9 rounded-md text-xl Vesper pt-2 pb-1 hover:bg-indigo-500 outline outline-indigo-400" onClick={addText}>Add Text</button>
                <button className="bg-green-300 px-4 h-9 rounded-md text-xl Vesper pt-2 pb-1 hover:bg-green-500 outline outline-green-400" onClick={()=>exportComponentAsJPEG(memeRef)}>Save</button>
            </div>
            {show && <div className="flex justify-center space-x-5 mb-10">
                <input value={color} onChange={(e)=>setColor(e.target.value)} placeholder="Change Color of your Text" className="text-center outline outline-offset-2 outline-cyan-500 border h-10 rounded-lg text-2xl text-gray-500 Coiny"></input>
                <input value={size} onChange={(e)=>setSize(e.target.value)} placeholder="Change font-size" className="text-center outline outline-offset-2 outline-cyan-500 border h-10 rounded-lg text-2xl text-gray-500 Coiny"></input>
            </div>}
        </div>
    )
}
export default EditPage