import React from 'react'
import images  from "../../constants/images"
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import Header from '../Layout/Header';


function Hero() {
  return (
    <div>
    <Header/>
     <img className="object-cover h-[90vh] md:h-full object-[45%] md:w-full " src={images.Herobg} alt="Hero"/>
        <div className="z-0 absolute top-[30%] md:top-[20%] pr-3 left-[8%] md:left-[50%] flex flex-col gap-2 md:gap-8">
          <h1 className="text-4xl md:text-6xl font-Fenix "> Never Stop</h1>
          <h1 className=" text-[#549064] text-6xl md:text-8xl font-medium ">
          Exploring
        </h1>
         <p className="text-sm md:w-[80%] leading-8">Embark on Epic Wilderness Expeditions. Conquer Majestic Peaks, Forge Unforgettable Trails, and Immerse Yourself in the Grandeur of Nature. Join Our Hiking Community and Let Your Adventurous Spirit Roam Free.</p>
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
         
         
         
         <button className="bg-[#549064] w-36 py-4 text-white text-lg rounded-md  items-center flex justify-center gap-4">
            Explore 
            <BsFillArrowRightCircleFill size={24}/>
          </button>
       
         </div>
         <div>
           
         </div>
    </div>
  )
}

export default Hero
