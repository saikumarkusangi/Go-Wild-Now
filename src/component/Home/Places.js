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
      <div className=' flex overflow-x-auto  bg-white py-10 px-4  items-center gap-10  text-xl '>
        
        {Area.map(product => {
          return(
            <div className='text-center border-2 px-2 rounded-lg py-2 w-[60%] min-w-full md:min-w-min'>
                <img className='px-2 py-2 rounded-lg' src={product.image} alt="Trekking Shoe" />
                <h1 className='mt-5 text-xl '>{product.name}</h1>
                
           </div>
          )
        })}
        </div>
    </div>
  )
}

export default Places
