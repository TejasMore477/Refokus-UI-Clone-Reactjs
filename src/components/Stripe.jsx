import React from 'react'

function Strip({val}) {
  return (
      <div className=' w-screen'>
        <div className='w-[100%] px-6 py-5 bg-zinc-800 flex items-center border-y-[1px] border-r-[1px] border-zinc-500'>
          <img className='h-5 w-80' src={val.url} alt="" />   
          <span className='font-semibold'>{val.numb}</span>
        </div>  
      </div>
  )
}

export default Strip