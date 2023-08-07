import React from 'react';

import images from '../constants/images';
function Location() {
  return (
          <div className=''> 
             <img className='object-cover h-[60vh] md:h-full  md:w-full' src={images.Abouth}alt='hrader'/>
         <div className="z-0   top-[20%] md:top-[20%] pr-3 left-[24%] md:bg-transparent gap-4 md:left-[40%] flex flex-col md:gap-8">
              <h1 className="  absolute  text-white text-4xl md:text-6xl font-medium px-10 ">About Us</h1>
          <div className='flex  justify-center gap-10 rounded-full py-4   bg-white'>
              <a href='/' className='text-xl font-Oswald font-semibold hover:text-red-600  hover:duration-150 pl-8'>Home </a>
              <p className='text-xl font-bold'>|</p>
              <a href='#' className='text-xl font-Oswald font-semibold text-[#f9430a] pr-4'>About Us</a>
          </div>

          <div className='flex w-full'>
            <h2>Nvaeeee</h2>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
            <img src={images.About}/>
          </div>

           </div>
          </div>



  );
}

export default Location;
