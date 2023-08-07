import React from 'react';
import images from '../constants/images';

const Contact = () => {
  return (
    <div className=' m-auto w-full py-16 '>
      <div className='flex flex-col items-center gap-4'>
          <h2 className='text-2xl md:text-4xl my-4 font-Oswald font-bold text-[#04335e] text-center'>Send us a message</h2>
          <p className='text-lg md:text-lg my-4 font-Oswald font-bold text-black text-center'>We're standing by!</p>
          <img className='  text-[#04335e]  mb-4' src={images.Hill} alt="Best Products" />
      </div>
     
     
      <div className='grid md:grid-cols-2'>
        <img
          src='https://slidesigma.nyc/templatemonster/react/campa/assets/img/blog/3.jpg'
          alt='/'
          className='md:w-full shadow-2xl shadow-gray-800 w-[90%]  object-[40%] h-[50vh] md:h-full object-cover p-2 max-h-[500px] rounded-r-lg ml-6 '/>
        <form className=' shadow-2xl shadow-gray-800 md:w-[80%] ml-6 w-[90%] md:ml-16  gap-3 '>
          <div className='grid grid-cols-2 mt-8 px-4 gap-3'>
                <input className=' m-2 border-black border-2 rounded-full px-4 py-4 font-semibold text-lg text-black' type='text' placeholder='First' />
                <input className=' m-2 border-black border-2 rounded-full px-4 py-4 font-semibold text-lg text-black' type='text' placeholder='Last' />
                <input className=' m-2 border-black border-2 rounded-full px-4 py-4 font-semibold text-lg text-black' type='email' placeholder='Email' />
                <input className=' m-2 border-black border-2 rounded-full px-4 py-4 font-semibold text-lg text-black' type='tel' placeholder='Phone' />
                <input className=' col-span-2 border-black  m-2  border-2 rounded-full px-4 py-4' type='text' placeholder='Address' />
                <textarea className='border border-black col-span-2 m-2 p-2 ' cols='10' rows='6'>Write Your Message</textarea>
                <button className='col-span-2 m-2  border-2 rounded-full px-1 py-4 bg-cyan-400  text-black text-lg top-4' >Get A Quote</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;