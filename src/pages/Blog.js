import React from 'react';
import images from '../constants/images';

function Blog() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around text-center">
        <div className="flex flex-col items-center mt-4">
          <img className="md:w-[90%]  rounded-2xl" src={images.Blog2} alt="Blog-2" />
          <h1 className="text-2xl font-semibold"> Kids Enjoying Campaign</h1>
          <p className="text-sm leading-8">Research the trekking route thoroughly before you go.</p>
          <button className="bg-yellow-400 w-32 py-4 text-white text-lg rounded-md items-center flex justify-center gap-4">
            Read More
          </button>
        </div>

        <div className="flex flex-col items-center mt-4">
          <img className="md:w-[90%] rounded-2xl" src={images.Blog3} alt="Blog-3" />
          <h1 className="text-2xl font-semibold">Training For Short Climbers</h1>
          <p className="text-sm leading-8">Research the trekking route thoroughly before you go.</p>
          <button className="bg-yellow-400 w-32 py-4 text-white text-lg rounded-md items-center flex justify-center gap-4">
            Read More
          </button>
        </div>
        <div className="flex flex-col items-center mt-4">
        <img className="md:w-[90%] rounded-2xl" src={images.Blog1} alt="Blog-3" />
        <h1 className="text-2xl font-semibold">Safety Tips For Trekkers</h1>
        <p className="text-sm leading-8">Research the trekking route thoroughly before you go.</p>
        <button className="bg-yellow-400 w-32 py-4 text-white text-lg rounded-md items-center flex justify-center gap-4">
          Read More
        </button>
      </div>

      </div>


    </div>
  );
}

export default Blog;
