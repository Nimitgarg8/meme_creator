import React from 'react'
import { getAllMemes } from './api/memes'
import MemeCard from './componenets/card'

function Home(){

    const API_URL = "https://api.imgflip.com/get_memes"

    const [data, setData] = React.useState([]); 
    const memes = data;


    React.useEffect(()=>{
        getAllMemes(`${API_URL}`).then((memes) => setData(memes.data.memes));
    },[])

    
    return (
        <div>
            <div className='flex flex-wrap justify-center py-5 bg-gradient-to-r from-indigo-200 from via-sky-200 via-50% to-emerald-200 to-90%'>
                {
                    memes.map(meme => <MemeCard img = {meme.url} title={meme.name}/>)
                }
            </div>
        </div>
    )
}

export default Home;