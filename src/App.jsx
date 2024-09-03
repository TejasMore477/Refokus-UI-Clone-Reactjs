import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes'
import Products from './components/Products';
function App (){
  return(
    <div className='w-full text-white bg-zinc-900 font-["Satoshi_Variable"]'>
      <Navbar/>
      <Work />
        <Stripes />
      <Products />
    </div>
  )
}

export default App