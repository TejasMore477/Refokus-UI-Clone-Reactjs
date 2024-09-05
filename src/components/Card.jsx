import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import Button from './Button';
import { motion } from "framer-motion"

function Card({data}) {
  return (
    <motion.div whileHover={{}} className={`${data.width} bg-zinc-800 p-5 rounded-xl flex flex-col md:h-[60vh] ${data.color && "hover:bg-violet-800"} hover:p-[25px] justify-between duration-200 ease-linear`}>
      <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
          <h3>{data.text}</h3>
          <MdArrowRightAlt />
        </div>
        <h2 className='lg:text-3xl sm:text-2xl font-medium md:mb-40 sm:mb-10 md:mt-5'>{data.heading}</h2>
      </div>
      <div>
       {data.started && (
        <>
          <h1 className='w-full lg:text-8xl sm:text-7xl mt-4 font-medium tracking-tight leading-none mb-3'>{data.title}</h1>
          <Button text={data.button}/> 
        </>
       )}
      {data.para && (
        <>
          <p className='text-sm text-zinc-400 font-medium'>{data.paragraph}</p>
        </>
       )}
      
      </div>
    </motion.div>
  )
}

export default Card