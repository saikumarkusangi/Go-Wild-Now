import React, { useState } from 'react'
import Images from '../../constants/images'
import { Link } from 'react-router-dom'
import {RiMenu3Line} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'
function Header() {
  const [open ,setopen] =useState(false)
  const toggle = () => setopen(!open)
  return (
    <div className='bg-transparent  w-full fixed justify-between flex items-center px-2 md:px-4 py-2'>
      <div className='flex items-center'>
        <img src={Images.Logo} alt='Logo' className='h-20 '/> 
        <h1 className='text-black text-2xl md:text-4xl font-bold font-DancingScript'>Go Wild Now</h1>
      </div>
    
      <div className='text-black md:flex cursor-pointer  hidden gap-10 text-lg' >
        <Link className='hover:text-red-400 duration-200'>Home</Link>
        <Link className='hover:text-red-400 duration-200'>Loaction</Link>
        <Link className='hover:text-red-400 duration-200'>Camping</Link>
        <Link className='hover:text-red-400 duration-200'>Shop</Link>
        <Link className='hover:text-red-400 duration-200'>Contact</Link>
      </div>
      {/* Mobile View */}
      <RiMenu3Line onClick={toggle} className='md:hidden text-black ' size={28}/> 
      <div className={ `duration-500 text-white z-50 md:hidden flex flex-col fixed top-0 bg-black h-screen w-1/2 items-center gap-10 py-24  
      ${open ? 'right-0': 'right-[-100%]'} `}>
      <AiOutlineClose size={24} onClick={toggle} className=' absolute top-10 right-5'/>
      <Link className='hover:text-red-400 duration-200'>Home</Link>
      <Link className='hover:text-red-400 duration-200'>Loaction</Link>
      <Link className='hover:text-red-400 duration-200'>Camping</Link>
      <Link className='hover:text-red-400 duration-200'>Shop</Link>
      <Link className='hover:text-red-400 duration-200'>Contact</Link>
    </div>
    </div>
  )
}

export default Header
