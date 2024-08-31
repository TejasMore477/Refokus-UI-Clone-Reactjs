import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes'
function App (){
  return(
    <div className='w-full h-screen text-white bg-zinc-900 font-["Satoshi_Variable"]'>
      <Navbar/>
      <Work />
      <div className=''>
        <Stripes />
        <Stripes />
      </div>
    </div>
  )
}

export default App