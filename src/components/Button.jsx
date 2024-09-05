import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import { motion } from "framer-motion";

function Button({text = "Get Started"}) {

  const DURATION = 0.25;

  const FlipLink = ({ children, href }) => {
    return (
      <motion.a
        initial="initial"
        whileHover="hovered"
        href={href}
        className="relative inline-block overflow-hidden whitespace-nowrap lg:text-sm text-xs font-black uppercase"
        style={{
          lineHeight: 0.75,
        }}
      >
        <div>
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: 0.05,
              }}
              className="inline-block"
            >
              {text}
            </motion.span>
        </div>
        <div className="absolute inset-0">
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: 0.03,
              }}
              className="inline-block"
            >
              {text}
            </motion.span>
        </div>
      </motion.a>
    );
  };

  return (
    <div className='min-w-32 lg:w-36 sm:w-40 lg:px-3 px-3 md:px-2 sm:px-3 py-2 text-black bg-zinc-100 rounded-full text-center flex items-center justify-between cursor-pointer'> 
        <FlipLink className='lg:text-sm text-xs font-semibold inline-block'>{text}</FlipLink>
        <BsArrowReturnRight />
    </div>
  )
}

export default Button