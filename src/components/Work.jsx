import React, { useState } from 'react'
import { motion , useScroll ,useMotionValueEvent} from "framer-motion"
import image1 from '../assets/images/Brightwave.webp'
import image2 from '../assets/images/Cula.webp'
import image3 from '../assets/images/Jungle.webp'
import image4 from '../assets/images/Silvr.webp'
import image5 from '../assets/images/Weglot Like Magic.webp'
import image6 from '../assets/images/Yahoo.webp'


function Work() {

    const data = [
        {url:image1, top:"50%",left:"50%", isActive:false},
        {url:image2, top:"53%",left:"48%", isActive:false},
        {url:image3, top:"60%",left:"55%", isActive:false},
        {url:image4, top:"63%",left:"45%", isActive:false},
        {url:image5, top:"59%",left:"50%", isActive:false},
        {url:image6, top:"67%",left:"51%", isActive:false},
    ]

    const [images,setImages] = useState(data)
    const { scrollYProgress } = useScroll()

    useMotionValueEvent(scrollYProgress, "change", (value) => {
        function imageShow(arr) {
            setImages(prev=>(
                prev.map((item,index) => (
                    arr.indexOf(index) === -1
                        ? {...item, isActive:false}
                        : {...item, isActive:true}
                ))
            ))
        };

        switch(Math.floor(value * 100)){
            case 0:
                imageShow([]);
                console.log("1")
                break;
            case 2:
                imageShow([0]);
                console.log("1")
                break;
            case 3:
                imageShow([0,1]);
                console.log("12")
                break;
            case 5:
                imageShow([0,1,2]);
                console.log("123")
                break;
            case 6:
                imageShow([0,1,2,3]);
                console.log("1234")
                break;
            case 8:
                imageShow([0,1,2,3,4]);
                console.log("12345")
                break;
            case 9:
                imageShow([0,1,2,3,4,5]);
                console.log("23456")
                break;
        }
    })



  return (
    <div className='w-full sm:mt-0  sm:my-32 sm:py-0 py-32 sm:border-b-0 border-b-[1px]'>
        <div className='max-w-screen-xl mx-auto text-center relative my-9'>
            <h1 className='text-[30vw] font-medium leading-none text-white'>Work</h1>
            <div className='absolute top-0 w-full h-full'>
                {images.map((item, index)=>(
                    item.isActive && (<img key={index} className='w-60 rounded-md absolute -translate-x-[50%] -translate-y-[50%] duration-300 ease-in-out' src={item.url} style={{top:item.top, left:item.left}} alt="" />)
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work