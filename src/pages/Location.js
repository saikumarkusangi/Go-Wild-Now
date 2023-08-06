import React from 'react';
import { BsFillCalendar2DateFill } from 'react-icons/bs';
import images from '../constants/images';

function Location() {
  return (
    <div  className=' w-full  pt-[10%] flex '>
      <form className='lg:flex lg:justifiy-between w-full items-center'>
        <div className='flex flex-col my-2 py-2'>
          <label>Destination:</label>
          <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
            <option>Manali</option>
            <option>Munnar</option>
            <option>Rishikesh</option>
            <option>Shimla</option>
            
          </select>
        </div>
        <div className='flex w-full'>
          <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
            <label>Check-In</label>
            <input className='border rounded-md p-2' type='date' />
          </div>
          <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
            <label>Check-Out</label>
            <input className='border rounded-md p-2' type='date' />
          </div>
        </div>

      </form>
     <img className='w-[40%] object-cover rounded-l-full top-10 ' src="https://c8.alamy.com/comp/R4PC8B/couple-on-hike-taking-rest-under-tree-R4PC8B.jpg"/>


  </div>



  );
}

export default Location;
