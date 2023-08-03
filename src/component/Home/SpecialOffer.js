import React from 'react'
import images from '../../constants/images'


function SpecialOffer() {
  return (
    <div className='relative  w-[90%]   mx-auto rounded-2xl overflow-hidden'>
      <img className='w-full object-[40%] h-[50vh] md:h-full object-cover' src={images.Specialofferbg}alt='Specailoffer'/>
     <div className='absolute flex flex-col gap-2 md:gap-6 left-[40%] bottom-[10%] md:top-[10%] md:right-[12%]  ' >
     <h1 className='font-semibold text-2xl md:text-6xl'> Ready For </h1>
     <h1 className='font-bold text-6xl md:text-9xl text-[#549064] '>Hiking</h1>
     <h2 className='bg-red-500 px-2 py-2 md:px-4 md:py-4 md:text-6xl text-2xl'>Flat 25% OFF</h2>
     <button className='text-lg  md:text-2xl w-32 md:w-40 mt-2 md:mt-0 rounded-md bg-yellow-400 py-2'>Book Now</button>
     </div>
    </div>
  )
}

export default SpecialOffer
