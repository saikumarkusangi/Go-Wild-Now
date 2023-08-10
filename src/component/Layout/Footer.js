import React from 'react';
import images from '../../constants/images';



function Footer() {
  return (
    <div className='bg-black text-white overflow-hidden'>
      <div className='flex flex-auto  py-4 md:w-1/2   '>
        <div className='flex flex-col md:w-[55%]   md:px-[62%] px-10  gap-4'>
          <h1 className='text-xl text-red-700 font-Oswald font-bold'>Company</h1>
          <a className='text-lg' href='/'>Home</a>
          <a className='text-lg' href='/'>Location</a>
          <a className='text-lg' href='/'>Camping</a>
          <a className='text-lg' href='/'>Shop</a>
          <a className='text-lg' href='/'>Contact</a>
        </div>
        <div className=' flex flex-col md:px-0 px-10 gap-4   '>
          <h1 className='text-xl text-red-700 font-Oswald font-bold '>Industries</h1>
          <p className='text-lg'>Privacy Policy</p>
          <p className='text-lg'>Policies & Rules</p>
          <p className='text-lg'>Payment</p>
          <p className='text-lg'>Our Team</p>
          <p className='text-lg'>Devigo@gmail.Com</p>
        </div>
        
      </div>
      
      <div className='px-10 flex flex-col gap-4 md:w-[50%] md:ml-[25%] mt-4 '>
        <h1 className='md:text-4xl text-xl font-bold md:ml-24 ml-6 '>Subscribe To Our Newsletter</h1>
        <input className='px-10 text-xl text-black font-medium py-1  md:ml-8 rounded-full' text='email' placeholder='Enter Your Email' />
        <button className='bg-[#f9430a] font-lg px-4 py-2 rounded-full  hover:bg-red-500 md:ml-8'>Submit</button>
      </div>
        <h1 className='md:text-xl text-red-800 font-Oswald font-bold  md:ml-[35%] mt-4 underline-white text-sm ml-[10%] mb-10'> Created by <span className='text-white'>Devigo Designer</span> | All right Reserved © 2023 </h1>
      
    </div>
  );
}

export default Footer;

