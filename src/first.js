import React from 'react'

function NavBar(){
    return(
        <div>
            <div className='flex p-3 justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% items-center space-x-3'>
                <img src='https://cdn.pixabay.com/photo/2013/07/13/10/52/fawkes-157941_1280.png' className='w-20 h-20' alt=''></img>
                <div className='flex flex-col'>
                    <span className='text-5xl Monoton align-middle text-black font-medium h-10'>Memers</span>
                    <span className='align-top tracking-widest Electro text-xl'>STUDIO</span>
                </div>
            </div>
        </div>
    )
}
export default NavBar