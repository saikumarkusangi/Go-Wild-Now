import React from 'react'
import images from '../../constants/images'


function SpecialOffer() {
  return (
    <div className='relative w-[90%]  mx-auto rounded-2xl overflow-hidden'>
      <img src={images.Specialofferbg}alt='Specailoffer'/>
     <div className='absolute flex flex-col gap-6 top-[30%] right-[8%] text-6xl'>
     <h1> Ready For </h1>
     <h1 className='font-bold text-[#549064] '>Hiking</h1>
     <h2 className='bg-red-500 px-4 py-4'>Flat 25% OFF</h2>
     <button className='text-2xl w-40 rounded-md bg-yellow-400 py-2'>Book Now</button>
     </div>
    </div>
  )
}

export default SpecialOffer
