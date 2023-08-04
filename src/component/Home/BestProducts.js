import React from 'react';
import images from "../../constants/images";

function BestProducts() {
  
  const products = [

    { 
      image:images.Shoe,
      name:'Trekking Shoe',
      price:25.34
    },
    { 
      image:images.Blade,
      name:'Wooden Knife',
      price:32.5
    },
    {
      image:images.Handchain,
      name:'Climbing Belt',
      price:22.2
    },
    {
      image:images.Bag,
      name:'Round Backpack',
      price:43.2
    }
  ]

  return (
    <div className=''>
      <div className='flex flex-col items-center gap-4'>
          <h1 className='text-2xl md:text-4xl my-4 font-Oswald font-bold text-[#04335e]'>BEST PRODUCTS</h1>
          <img className=' text-[#04335e] mb-4' src={images.Hill} alt="Best Products" />
      </div>
      <div className=' flex overflow-x-auto  bg-white py-10 px-4  items-center gap-10  text-xl '>
        
      {products.map(product => {
        return(
          <div className='text-center border-2 px-2 rounded-lg py-2 w-[60%] min-w-full md:min-w-min'>
              <img className='px-2 py-2 rounded-lg' src={product.image} alt="Trekking Shoe" />
              <h1 className='mt-5 text-xl '>{product.name}</h1>
              <p className='font-Oswald text-2xl'>${product.price}</p>
         </div>
        )
      })}
      </div>
    </div>
  );
}

export default BestProducts;

