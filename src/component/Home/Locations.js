import React from 'react'
import images from '../../constants/images'



function Locations() {
  return (
    <div className=' w-[90%] overflow-x-hidden  mx-auto rounded-2xl overflow-hidden'>
          <div className='flex flex-col items-center overflow-x-hidden gap-4'>
          <h1 className='text-2xl md:text-4xl my-4 font-Oswald font-bold text-[#04335e]'>Famous Places</h1>
          <img className=' text-[#04335e] mb-4' src={images.Hill} alt="Best Products" />
      </div>
   
    <img className='  w-full object-[40%] h-[50vh] md:h-full object-cover mb-14 border-black border-2 ' src={'https://irisholidays.com/keralatourism/wp-content/uploads/2023/06/places-to-visit-in-munnar-1.jpg'}alt='Specailoffer'/>

    </div>
  )
}

export default Locations
