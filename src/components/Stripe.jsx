import React from 'react'

function Strip({val}) {
  return (
      <div className='w-screen'>
        <div className='w-[100%] hidden  lg:px-6 px-6 sm:px-3 py-6 sm:bg-zinc-800 sm:flex items-center border-y-[1px] border-r-[1px] border-zinc-500'>
          <img className='lg:h-5 sm:h-3 lg:w-80 sm:w-40 h-6 w-80' src={val.url} alt="" />   
          <span className='font-semibold lg:text-base sm:text-xs'>{val.numb}</span>
        </div>  
      </div>
  )
}

export default Strip