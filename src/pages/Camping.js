import React from 'react'
import images from '../constants/images'


function Camping() {
  return (
    <div className='w-full  mx-auto px-4 top-6 '>
    <h1>hi</h1>
       <div className='relative'>
       <img className='w-full h-[20%]' src={images.Bag} alt='bag'/>
        <p className='top-2 absolute bg-red-400 px-4 left-1 '>Sold out</p>
       </div>
      
    </div>
  )
}

export default Camping
