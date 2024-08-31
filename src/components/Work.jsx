import React from 'react'

function Work() {

    const images = [
        {url:"src/assets/images/Brightwave.webp", top:"50%",left:"50%", isActive:true},
        {url:"src/assets/images/Cula.webp", top:"53%",left:"48%", isActive:false},
        {url:"src/assets/images/Jungle.webp", top:"60%",left:"55%", isActive:false},
        {url:"src/assets/images/Silvr.webp", top:"63%",left:"45%", isActive:false},
        {url:"src/assets/images/Weglot Like Magic.webp", top:"59%",left:"50%", isActive:false},
        {url:"src/assets/images/Yahoo.webp", top:"67%",left:"51%", isActive:false},
    ]
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto text-center relative my-9'>
            <h1 className='text-[30vw] font-medium leading-none text-white'>Work</h1>
            <div className='absolute top-0 w-full h-full'>
                {images.map((item, index)=>(
                    item.isActive && (<img className='w-60 rounded-md absolute -translate-x-[50%] -translate-y-[50%]' src={item.url} style={{top:item.top, left:item.left}} alt="" />)
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work