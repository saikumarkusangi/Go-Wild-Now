import React from 'react'
import images from '../constants/images'
import {BsFillArrowRightCircleFill} from "react-icons/bs";



function Camping() {

const data = [
  {
    image:'https://slidesigma.nyc/templatemonster/react/campa/assets/img/projects/10.jpg',
    Title:"Hiking",
    name:'Mountain Camping'

  },
  {
    image: 'https://slidesigma.nyc/templatemonster/react/campa/assets/img/projects/15.jpg',
    Title:"Camping",
    name:'Safari Camping'
  },
  {
    image: 'https://slidesigma.nyc/templatemonster/react/campa/assets/img/projects/17.jpg',
    Title:"Travel",
    name:'Friends Camping'
  },
  {
    image: 'https://slidesigma.nyc/templatemonster/react/campa/assets/img/projects/14.jpg',
    Title:"Travel",
    name:'Indivisual Camping'
  },
  {
    image: 'https://slidesigma.nyc/templatemonster/react/campa/assets/img/projects/9.jpg',
    Title:"Camping",
    name:'Desert Camping'
  },
  {
    image: 'https://slidesigma.nyc/templatemonster/react/campa/assets/img/projects/6.jpg',
    Title:"Hiking",
    name:'Forest Camping'
  },
 
 
]

  return (
    <div className='relative cursor-pointer overflow-hidden  '> 
    <img className='object-cover h-[60vh] md:h-full  md:w-full ' src={images.Abouth}alt='hrader'/>
<div className="z-0  absolute top-[8%]  md:bg-transparent gap-4 md:left-[38%] flex flex-col md:gap-8 ">
     <h1 className="text-[#f8fbfe] text-2xl md:text-6xl font-bold md:px-10 px-24 ">Case Studies</h1>
 <div className='flex  justify-center gap-10 rounded-full py-4 ml-10    bg-white '>
     <a href='/' className='text-xl font-Oswald font-semibold hover:text-red-600   md:pl-8'>Home </a>
     <p className='text-xl font-bold'>|</p>
     <a href='#' className='text-xl font-Oswald font-semibold text-[#f9430a] pr-4 '>Camping</a>
 </div>
  </div>
  <div className='flex  flex-wrap md:w-[100%]  md:mx-14 my-4 '> 
     {data.map(iteams => {
      return(
          <div className=' md:w-[30%]   relative  gap-8  mx-2 my-4'>
            <img className='w-full md:h-full   object-cover rounded-lg ease-in md:px-0 px-4' src={iteams.image} alt='image'/>
            
            <div className='absolute left-0 bottom-0 md:bg-gradient-to-t from-[#000000d4] w-full h-full  '>
            <h1 className='text-2xl text-[#f36525] font-bold font-Oswald absolute bottom-20 left-5 md:left-10'>{iteams.Title}</h1>
            <p className='text-lg font- font-semibold text-white font-serif absolute bottom-10 left-5 md:left-10' >{iteams.name}</p>  
            <BsFillArrowRightCircleFill size={38} className='hover:animate-bounce text-white hover:text-[#f36525]  absolute left-[68%] md:left-[85%] bottom-8' />
    
            </div>
         
          </div>
      )
     })}
    
  </div>
      
    </div>
  )
}

export default Camping
