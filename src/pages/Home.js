import images  from "../constants/images"
import {BsFillArrowRightCircleFill} from "react-icons/bs";

function Home() {
  return (
    <div>
     <img className="object-cover h-[90vh] md:h-full object-[45%] bg-red-400 md:w-full " src={images.Herobg} alt="Hero"/>
        <div className="z-30 absolute top-[30%] md:top-[20%] pr-3 left-[8%] md:left-[50%] flex flex-col gap-2 md:gap-8">
          <h1 className="text-4xl md:text-6xl font-Fenix "> Never Stop</h1>
          <h1 className=" text-[#549064] text-6xl md:text-8xl font-medium ">
          Exploring
        </h1>
         <p className="text-sm md:w-[80%] leading-8">Embark on Epic Wilderness Expeditions. Conquer Majestic Peaks, Forge Unforgettable Trails, and Immerse Yourself in the Grandeur of Nature. Join Our Hiking Community and Let Your Adventurous Spirit Roam Free.</p>
          <button className="bg-[#549064] w-36 py-4 text-white text-lg rounded-md  items-center flex justify-center gap-4">
            Explore 
            <BsFillArrowRightCircleFill size={24}/>
          </button>
         </div>
    </div>
  )
}

export default Home
