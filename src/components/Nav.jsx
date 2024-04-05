import React from 'react'
import { RiComputerLine } from "react-icons/ri";
import { IoBagSharp } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className='bg-black text-white flex justify-between items-center w-[70%] rounded-b-lg'>
        <div>Online Shopping CreativeInk</div>
        <div className='flex justify-between items-center p-3 gap-2'>
            <button className='flex items-center gap-2 p-2 border border-1'><RiComputerLine /> Visit Website</button>
            <button className='rounded-full outline-none bg-pink-500 p-2'><IoBagSharp/></button>
            <button className='rounded-full outline-none bg-orange-200 p-2'><FaUserTie/></button>
        </div>
    </div>
  
  )
}

export default Nav
