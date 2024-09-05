import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes'
import Products from './components/Products';
import Cards from './components/Cards';
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';




function App (){
  const locomotiveScroll = new LocomotiveScroll();
  return(
    <div className='w-full text-white bg-zinc-900 font-["Satoshi_Variable"] xl:px-16 lg:px-5'>
      <Navbar/>
      <Work />
      <Stripes />
      <Products />
      <Cards />
      <Footer />
    </div>
  )
}

export default App