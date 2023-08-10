import React from 'react'
import images from '../constants/images'
import {BsFillArrowRightCircleFill} from "react-icons/bs";



function Shop() {

const data = [
  {
    image:images.Tenet1,
    Title:"Camping Tenet Large",
    name:'25$'

  },
  {
    image:images.Tenet2,
    Title:"Camping Tenet Medium",
    name:'22$'
  },
  {
    image:images.Tenet3,
    Title:"Camping Tenet small",
    name:'20$'
  },
  {
    image:images.bag1,
    Title:"Hiking Ruksack ",
    name:'25$'
  },
  {
    image:images.bag2,
    Title:"Hiking Ruksack Camping",
    name:'40$'
  },
  {
    image:images.bag3,
    Title:"Camping Bag",
    name:'20$'
  },


 
 
]

  return (
    <div className='relative cursor-pointer overflow-hidden  '> 
    <img className='object-cover h-[60vh] md:h-[60vh] py-22 md:w-full  ' src={images.Shoph}alt='hrader'/>
<div className="z-0  absolute md:top-[20%] top-[10%] md:bg-transparent left-24 gap-4 md:left-[40%] flex flex-col md:gap-8 ">
     <h1 className="text-[#f8fbfe] text-2xl md:text-6xl font-bold md:px-14 px-24 ">Shop</h1>
 <div className='flex  justify-center gap-10 rounded-full py-4  px-14  bg-white '>
     <a href='/' className='text-xl font-Oswald font-semibold hover:text-red-600   md:pl-8'>Home </a>
     <p className='text-xl font-bold'>|</p>
     <a href='#' className='text-xl font-Oswald font-semibold text-[#f9430a] pr-4 '>Shop</a>
 </div>
  </div>
  <div className='flex  flex-wrap md:w-[100%] md:mx-14 my-4'> 
     {data.map(iteams => {
      return(
          <div className=' md:w-[30%]   relative  gap-8  mx-2 my-4'>
            <img className='w-full md:h-full   object-cover rounded-lg ease-in' src={iteams.image} alt='image'/>
            
            <div className='absolute left-0 bottom-0 md:bg-gradient-to-t from-[#000000d4] w-full h-full  '>
            <h1 className='text-2xl text-[#f36525] font-bold font-Oswald absolute bottom-20 left-5 md:left-10'>{iteams.Title}</h1>
            <p className='text-4xl font- font-semibold text-white font-serif absolute bottom-10 left-5 md:left-10' >{iteams.name}</p>  
            <BsFillArrowRightCircleFill size={38} className='hover:animate-bounce md:text-white text-[#f36525] md:hover:text-[#f36525]  absolute left-[80%] md:left-[85%] bottom-8' />
    
            </div>
         
          </div>
      )
     })}
    
  </div>
      
    </div>
  )
}

export default Shop