import React from 'react'


function Footer() {
  return (
    <div className='lg:max-w-screen-xl lg:mx-auto px-3 flex lg:flex-row flex-col-reverse mt-32 xl:gap-20 lg:gap-5 gap-10 md:h-[40vh] sm:h-[60vh] md:pb-5 pb-10'>
        <div>
            <h1 className='md:text-[12rem] sm:text-[10rem] text-[4rem] font-bold leading-none tracking-tight'>refokus.</h1>
            <div className='flex sm:gap-9 gap-5 mt-5'>
            {['Privacy', 'PolicyCookie', 'PolicyTerms', 'Webflow Agency'].map((links,index)=>(
                <a key={index} className='text-zinc-400 text-xs font-medium'>{links}</a>
            ))}
            </div>
        </div>

        <div className='flex gap-5'>
            <div> 
                <h2 className='text-sm text-zinc-300 capitalize mb-4'>socials</h2>
                <div>
                    {["Instagram","Twitter (x?)","LinkedIn"].map((link,index)=>(
                        <a key={index} href="" className='text-sm text-zinc-600 block mt-2 capitalize hover:text-zinc-300 duration-300 ease-in-out'>{link}</a>
                    ))}
                </div>
            </div>

            <div>
                <h2 className='text-sm text-zinc-300 capitalize mb-4'>sitemap</h2>
                <div>
                    {["home","work","carier","contact"].map((link,index)=>(
                        <a key={index} href="" className='text-sm text-zinc-600 block mt-2 capitalize hover:text-zinc-300 duration-300 ease-in-out'>{link}</a>
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