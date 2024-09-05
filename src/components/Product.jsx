import React from 'react'
import Button from './Button'

function Product({data, mover, index}) {
  return (
    <div onMouseEnter={()=>mover(index)} className={`w-full sm:h-[19rem] flex md:flex-row flex-col justify-between ${data.bg} md:items-center items-start lg:px-9 px-4 sm:pb-12 pb-12 duration-300 ease-in-out`}>
        <h1 className='w-60 lg:text-4xl md:text-3xl text-4xl font-semibold'>{data.title}</h1>
        <video key={index} className=' sm:hidden my-3 w-full h-[12rem] object-center object-cover' src={data.video} autoPlay muted loop></video>
        <div className='sm:w-1/3'>
            <p className='mb-5'>{data.para}</p>
            <div className='flex flex-row items-center justify-start gap-5'>
                {data.live &&  <Button text={"Live Link"}/>}
                {data.case &&  <Button text={"Case Study"}/>}
            </div>
        </div>
    </div>
  )
}

export default Product