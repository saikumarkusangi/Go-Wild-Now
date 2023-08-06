import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className=' m-auto w-full py-16'>
      <h2 className='text-2xl md:text-4xl my-4 font-Oswald font-bold text-[#04335e] text-center'>Send us a message</h2>
      <p className='text-2xl md:text-xl my-4 font-Oswald font-bold text-[#04335e] text-center'>We're standing by!</p>
      <div className='grid md:grid-cols-2 bg-cyan-100'>
        <img
          src='https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
          alt='/'
          className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] '/>
        <form className=''>
          <div className='grid grid-cols-2 bg-green-100'>
            <input className='border m-2 border-black border-2  font-semibold text-lg text-black' type='text' placeholder='First' />
            <input className='border m-2 border-black border-2  font-semibold text-lg text-black' type='text' placeholder='Last' />
            <input className='border m-2 border-black border-2  font-semibold text-lg text-black' type='email' placeholder='Email' />
            <input className='border m-2 border-black border-2  font-semibold text-lg text-black' type='tel' placeholder='Phone' />
            <input className='border col-span-2 border-black border-2 py-2 m-2' type='text' placeholder='Address' />
            <textarea className='border border-black col-span-2 m-2 p-2' cols='10' rows='6'>Write Your Message</textarea>
            <button className='col-span-2 m-2 bg-cyan-400 px-2 py-2 text-black text-lg'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;