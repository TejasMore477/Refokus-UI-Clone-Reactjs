import React from 'react'
import Button from './Button'

function Product({data}) {
  return (
    <div className='w-full flex justify-between items-center bg-zinc-800 py-5 px-9'>
        <h1 className='text-4xl font-semibold'>{data.title}</h1>
        <video className='w-72 h-full bg-red-700 object-center object-cover' src={data.video} autoPlay muted loop></video>
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