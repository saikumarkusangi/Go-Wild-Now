import React from 'react'
import images from '../constants/images'
import Header from '../component/Layout/Header'


function Camping() {
  return (
    <div className=' '>
       <div id='deals' className='m-auto w-full p-4  '>
          <form className='md:flex  md:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>
              <label>Destination:</label>
                <select className='md:w-[300px] border rounded-md p-2'>
                  <option>Munnar</option>
                  <option>Munnar</option>
                  <option>Munnar</option>
                  <option>Munnar</option>
                  <option>Munnar</option>
                </select>
            </div>
            <div className='flex w-full '>
              <div className='flex flex-col w-full md:max-w-[250px] my-2 p-2 gap-4  ml-10'>
                <label>
                  Trip Start
                </label>
                <input  className='border rounded-md ' type='date'/>
              </div>
              <div className='flex flex-col w-full md:max-w-[250px] my-2 p-2 gap-4'>
                  <label>Trip End</label>
                  <input className='border rounded-md ' type='date'/>
                </div>
            </div>
          </form>

          
        </div>
    </div>
  )
}

export default Camping
