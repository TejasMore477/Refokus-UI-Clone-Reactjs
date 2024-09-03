import React from 'react'
import Product from './Product'

function Products() {

    const data = [
        {title:"Webflow",video:"src/assets/videos/v1.webm",para:"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",live:true,case:false},
        {title:"Cula",video:"src/assets/videos/v2.webm",para:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",live:true,case:false},
        {title:"Singularity",video:"src/assets/videos/v3.webm",para:"A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",live:true,case:true},
        {title:"Brightwave",video:"src/assets/videos/v4.webm",para:"Brightwave, a category disruptor came to a us to build their brand from scratch and make a statement on its launch.",live:true,case:false},
        {title:"ARQITEL",video:"src/assets/videos/v5.webm",para:"With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",live:true,case:true},
    ];

  return (
    <div className='max-w-screen-xl h-fit mx-auto mt-20'>
        {data.map((item,index)=>(
            <Product key={index} data={item}/>
        ))}
    </div>
  )
}

export default Products