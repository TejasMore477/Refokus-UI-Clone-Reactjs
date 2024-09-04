import React from 'react'
import Card from './Card'

function Cards() {
  const card1 = {
    width:"basis-1/3",
    para:true,
    started:false,
    heading:"Who we are",
    paragraph:"Explore what drives our Team.",
    text:"Up Next: Culture"
  }

  const card2 = {
    width:"basis-2/3",
    para:false,
    started:true,
    heading:"Let's do it, together.",
    text:"Get In Touch",
    color:true,
    button : "contact us",
    title:"Start a Project"
  }
  return (
    <div className='max-w-screen-xl mx-auto rounded-xl flex gap-3 py-32'>
      <Card data={card1}/>
      <Card data={card2}/>
    </div>
  )
}

export default Cards