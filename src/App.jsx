import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';

function App (){
  return(
    <div className='w-full h-screen text-white bg-zinc-900 font-["Satoshi_Variable"]'>
      <Navbar/>
      <Work />
    </div>
  )
}

export default App