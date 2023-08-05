import React from 'react'
import images  from "../../constants/images"




function Places() {
 const Area =[
  {
  name:"Munnur",
  image:images.Munnar
 },

 {
  name:"Manali",
  image:images.Manali
 },

 {
  name:"Kedarkantha",
  image:images.Kedarkantha
 },

 {
  name:"Tigerhill",
  image:images.Tigerhill
 },



]

  return (
    <div>
        <div className='flex flex-col  items-center gap-4'>
          <h1 className='text-2xl md:text-4xl my-4 font-Oswald font-bold text-[#04335e]'>Popular Hiking Places</h1>
          <img className=' text-[#04335e] mb-4' src={images.Hill} alt="Best Products" />
      </div>
      <div className='flex overflow-x-auto  bg-white py-10 px-4  items-center gap-10  text-xl'>
           {Area.map(items => {
             return(
            <div className='border-2   text-center font-semibold  px-2 w-[60%] min-w-full md:min-w-min '>
                <img className='h-60 w-full object-top object-cover px-2 py-5 rounded-lg' src={items.image} alt='Munnar'/>
                <h1 className='mt-5 mb-5'>{items.name}</h1>
            </div>
             )
           })}
        </div>
    </div>
  )
}

export default Places
