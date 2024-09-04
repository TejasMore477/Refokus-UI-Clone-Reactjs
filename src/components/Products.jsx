import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {

    const data = [
        {title:"Webflow",bg:"hover:bg-black",video:"src/assets/videos/v1.webm",para:"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",live:true,case:false},
        {title:"Cula",bg:"hover:bg-[#4A576B]",video:"src/assets/videos/v2.webm",para:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",live:true,case:false},
        {title:"Singularity",bg:"hover:bg-[#000000]",video:"src/assets/videos/v3.webm",para:"A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",live:true,case:true},
        {title:"Brightwave",bg:"hover:bg-[#303040]",video:"src/assets/videos/v4.webm",para:"Brightwave, a category disruptor came to a us to build their brand from scratch and make a statement on its launch.",live:true,case:false},
        {title:"ARQITEL",bg:"hover:bg-[#050987]",video:"src/assets/videos/v5.webm",para:"With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",live:true,case:true},
    ];

    const [pose, setPose] = useState(0);

    function mover(val){
      setPose(val * 19)
    }

  return (
    <div className='max-w-screen-xl h-fit mx-auto mt-20 relative'>
        {data.map((item,index)=>(
            <Product key={index} data={item} mover={mover} index={index }/>
        ))}
        <div className='absolute w-full h-full pointer-events-none top-0'>
          <motion.div initial={{y:pose , x:"-50%"}} animate={{y:pose + 'rem'}} transition={{ease:[0.76,0,0.24,1],duration:0.6}} className='absolute w-80 h-[19rem] left-[43.68%] -translate-x-[50%] overflow-hidden'>
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