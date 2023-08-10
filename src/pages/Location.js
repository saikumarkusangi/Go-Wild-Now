import React from 'react';

import images from '../constants/images';
function Location() {
  return (
          <div className='relative '> 
             <img className='object-cover h-[60vh] md:h-full  md:w-full' src={images.Abouth}alt='hrader'/>
         <div className="z-0  absolute md:top-[20%] top-10 md:mt-0 mt-40 left-20  md:bg-transparent gap-4 md:left-[40%] flex flex-col md:gap-8">
              <h1 className="text-[#f8fbfe] text-4xl md:text-6xl font-medium px-10 ">About Us</h1>
          <div className='flex  justify-center gap-10 rounded-full py-4   bg-white'>
              <a href='/' className='text-xl font-Oswald font-semibold hover:text-red-600  hover:duration-150 pl-8'>Home </a>
              <p className='text-xl font-bold'>|</p>
              <a href='#' className='text-xl font-Oswald font-semibold text-[#f9430a] pr-4'>About Us</a>
          </div>
           </div>
        
           <div className='md:flex   md:w-full mt-10  border-black border-t-white  '>
            <img className='' src={images.About} alt='about'/>
            <div className='border-white border-2  '>
            <h1 className='text-2xl  md:text-4xl text-center font-bold md:ml-2  md:px-10 py-4 font-Oswald text-[#f9430a] '> We Love Camping Make Happy Everyone</h1>
            <p className='text-lg md:text-xl px-4 md:leading-10 leading-6  mt-10 '>Campers span a broad range of age, ability, and ruggedness, and campsites are designed in many ways as well.
                  Many campgrounds have sites with facilities such as fire rings, barbecue grills, utilities, shared.
                  Camping is an outdoor activity involving overnight stays away from home with or without a shelter, 
                  such as a tent or a recreational vehicle Typically participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities.
                  Providing them enjoyment The night or more spent outdoors distinguishes camping.
                  Camping as a recreational activity became popular among elites in the early 20th century. With time, it grew in popularity among other socioeconomic classes.
                  Modern campers frequent publicly owned natural resources such as national and state parks, wilderness areas, and commercial campgrounds Camping.
                  </p>
                  <button className='text-xl bg-[#f9430a] px-4 py-2 rounded-full mb-4 mt-4 md:mt-10 ml-4 '>Read More</button>
            </div>
   
          
          </div>


          </div>



  );
}

export default Location;
