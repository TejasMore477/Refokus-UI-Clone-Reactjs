import React from 'react'
import Button from './Button'

function Product({data, mover, index}) {
  return (
    <div onMouseEnter={()=>mover(index)} className={`w-full h-[19rem] flex justify-between ${data.bg} items-center px-9 duration-300 ease-in-out`}>
        <h1 className='w-60 text-4xl font-semibold'>{data.title}</h1>
        <div className='w-1/3'>
            <p className='mb-5'>{data.para}</p>
            <div className='flex items-center justify-start gap-5'>
                {data.live &&  <Button text={"Live Link"}/>}
                {data.case &&  <Button text={"Case Study"}/>}
            </div>
        </div>
    </div>
  )
}

export default Product