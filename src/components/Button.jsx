import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

function Button() {
  return (
    <div className='min-w-36 px-3 py-2 text-black bg-zinc-100 rounded-full text-center flex items-center justify-between cursor-pointer'> 
        <span className='text-sm font-semibold'>Get Started</span>
        <BsArrowReturnRight />
    </div>
  )
}

export default Button