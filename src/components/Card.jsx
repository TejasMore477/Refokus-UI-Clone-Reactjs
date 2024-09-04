import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import Button from './Button';

function Card({data}) {
  return (
    <div className={`${data.width} bg-zinc-800 p-5 rounded-xl ${data.color && "hover:bg-violet-800"} flex flex-col justify-between duration-200 ease-linear`}>
      <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
          <h3>{data.text}</h3>
          <MdArrowRightAlt />
        </div>
        <h2 className='text-3xl font-medium mb-40 mt-5'>{data.heading}</h2>
      </div>
      <div>
       {data.started && (
        <>
          <h1 className='w-full text-8xl mt-4 font-medium tracking-tight leading-none mb-3'>{data.title}</h1>
          <Button text={data.button}/> 
        </>
       )}
      {data.para && (
        <>
          <p className='text-sm text-zinc-400 font-medium'>{data.paragraph}</p>
        </>
       )}
      
      </div>
    </div>
  )
}

export default Card