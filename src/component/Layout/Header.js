import React, { useEffect, useState } from 'react'
import Images from '../../constants/images'
import { Link } from 'react-router-dom'
import {RiMenu3Line} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'


function Header() {
  const [open ,setopen] =useState(false)
  const toggle = () => setopen(!open)
  const [scrolling,setScrolling] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      console.log(window.screenY)
      if(window.scrollY > 20){
        setScrolling(true)
      }else{
        setScrolling(false)
      }
    };
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  console.log('&&&&&&&&&&&&')
  return (
    <div className='absolute z-50'>
    <div className={`${scrolling ? 'bg-gray-200' : 'bg-transparent'}   w-full fixed justify-between flex items-center px-2 md:px-4 py-2`}>
      <Link to="/">
      <div className='flex items-center'>
        <img src={Images.Logos} alt='Logo' className='h-20 '/> 
        <h1 className='text-black text-2xl md:text-4xl font-bold font-DancingScript'>Go Wild Now</h1>
      
      </div>
  

      </Link>
      <div className='text-black md:flex cursor-pointer  hidden gap-10 text-xl font-semibold' >
        <Link to="/" className='hover:text-red-400 duration-100'>Home</Link>
        <Link to="/aboutus" className='hover:text-red-400 duration-100'>About Us</Link>
        <Link to="/camping" className='hover:text-red-400 duration-100'>Camping</Link>
        <Link to="/Shop" className='hover:text-red-400 duration-100'>Shop</Link>
        <Link to="/Camping" className='hover:text-red-400 duration-100'>Contact Us</Link>
     
      </div>
      {/* Mobile View */}
      <RiMenu3Line onClick={toggle} className='md:hidden text-black ' size={28}/> 
      <div className={ `duration-500 text-white z-50 md:hidden flex flex-col fixed top-0 bg-black h-screen w-[60%] items-center gap-10 py-24  
      ${open ? 'right-0': 'right-[-100%]'} `}>
      <AiOutlineClose size={24} onClick={toggle} className=' absolute top-10 right-5'/>
      <Link to='/' className='hover:text-red-400 duration-200'>Home</Link>
      <Link to='/aboutus' className='hover:text-red-400 duration-200'>About Us</Link>
      <Link to="/Camping" className='hover:text-red-400 duration-200'>Camping</Link>
      <Link to="/Shop" className='hover:text-red-400 duration-200'>Shop</Link>
      <Link to="/" className='hover:text-red-400 duration-200'>Contact Us</Link>
    
    </div>
    </div>
    </div>
  )
}

export default Header
