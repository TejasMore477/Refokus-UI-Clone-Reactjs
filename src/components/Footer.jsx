import React from 'react'


function Footer() {
  return (
    <div className='max-w-screen-xl mx-auto flex gap-20 h-[40vh] pb-5 '>
        <div>
            <h1 className='text-[12rem] font-bold leading-none tracking-tight'>refokus.</h1>
            <div className='flex gap-9 mt-5'>
            {['Privacy', 'PolicyCookie', 'PolicyTerms', 'Webflow Agency'].map((links,index)=>(
                <a key={index} className='text-zinc-400 text-sm font-medium'>{links}</a>
            ))}
            </div>
        </div>

        <div className='flex gap-5 '>
            <div className='w-1/3'> 
                <h2 className='text-sm text-zinc-300 capitalize mb-4'>socials</h2>
                <div>
                    {["Instagram","Twitter (x?)","LinkedIn"].map((link,index)=>(
                        <a key={index} href="" className='text-sm text-zinc-600 block mt-2 capitalize hover:text-zinc-400 duration-300 ease-in-out'>{link}</a>
                    ))}
                </div>
            </div>

            <div>
                <h2 className='text-sm text-zinc-300 capitalize mb-4'>sitemap</h2>
                <div>
                    {["home","work","carier","contact"].map((link,index)=>(
                        <a key={index} href="" className='text-sm text-zinc-600 block mt-2 capitalize hover:text-zinc-400 duration-300 ease-in-out'>{link}</a>
                    ))}
                </div>
            </div>

            <div className='flex flex-col items-end gap-5'>
                <p className='w-3/5 text-sm tracking-tight font-medium text-right'>Refokus is a pioneering digital agency driven by designs and empowering bg technologies.</p>
                <img className='w-48' src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer