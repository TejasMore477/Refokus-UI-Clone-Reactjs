import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

import video1 from '../assets/videos/v1.webm'
import video2 from '../assets/videos/v2.webm'
import video3 from '../assets/videos/v3.webm'
import video4 from '../assets/videos/v4.webm'
import video5 from '../assets/videos/v5.webm'

function Products() {

    const data = [
        {title:"Webflow",bg:"hover:bg-black",video:video1,para:"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",live:true,case:false},
        {title:"Cula",bg:"hover:bg-[#4A576B]",video:video2,para:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",live:true,case:false},
        {title:"Singularity",bg:"hover:bg-[#000000]",video:video3,para:"A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",live:true,case:true},
        {title:"Brightwave",bg:"hover:bg-[#303040]",video:video4,para:"Brightwave, a category disruptor came to a us to build their brand from scratch and make a statement on its launch.",live:true,case:false},
        {title:"ARQITEL",bg:"hover:bg-[#050987]",video:video5,para:"With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",live:true,case:true},
    ];

    const [pose, setPose] = useState(0);

    function mover(val){
      setPose(val * 19)
    }

  return (
    <div className='max-w-screen-xl h-fit mx-auto sm:mt-20 relative'>
        {data.map((item,index)=>(
            <Product key={index} data={item} mover={mover} index={index }/>
        ))}
        <div className='absolute sm:block hidden w-full h-full pointer-events-none top-0'>
          <motion.div initial={{y:pose , x:"-50%"}} animate={{y:pose + 'rem'}} transition={{ease:[0.76,0,0.24,1],duration:0.6}} className='absolute lg:w-80 md:w-72 h-[19rem] md:left-[43.68%] sm:right-[-23%] -translate-x-[50%] overflow-hidden'>
            {data.map((item, index)=>(
              <motion.div key={index} animate={{y:-pose + 'rem'}}  transition={{ease:[0.76,0,0.24,1],duration:0.5}} className=' w-full h-full'>
                <video key={index} className='w-80 h-[19rem] object-center object-cover' src={item.video} autoPlay muted loop></video>
              </motion.div>
            ))}
          </motion.div>
        </div>
    </div>
  )
}

export default Products