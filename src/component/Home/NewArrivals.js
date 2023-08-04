import React from 'react'
import images from '../../constants/images'

function NewArrivals() {
 const NewArrival = [
  {
   image:images.Glass,
   name:"Glass",
   price:14.86,

  },
  {
    image:images.BabecueOven,
    name:"Babecue-Oven",
    price:14.86,
   
   },
   {
    image:images.Belay,
    name:"Belay",
    price:14.86,
   
   },
   {
    image:images.Cooker,
    name:"Cooker",
    price:14.86,
    
   },
 ]
   
  return (
    <div className='md-w-[40] mx-auto py16 px-4 items-center'>
      <div className='flex flex-col items-center gap-4'>
          <h1 className='text-2xl md:text-4xl my-4 font-Oswald font-bold text-[#04335e]'>NEW ARRIVALS</h1>
          <img className=' text-[#04335e] mb-4' src={images.Hill} alt="Best Products" />
  </div>

      <div className='flex overflow-x-auto  bg-white py-10 px-4  items-center gap-10  text-xl'>
      {NewArrival.map(iteams => {
        return(
          <div className='text-center border-2 px-2 rounded-lg py-2 w-[60%] min-w-full md:min-w-min'>
              <img className='px-2 py-2 rounded-lg' src={iteams.image} alt="Glass" />
              <h1 className='mt-5 text-xl '>{iteams.name}</h1>
              <p className='font-Oswald text-2xl'>${iteams.price}</p>
         </div>
        )
      })}
      
      </div>
            
    </div>
  )
}

export default NewArrivals
