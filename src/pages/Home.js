
import BestProducts from "../component/Home/BestProducts"
import Hero from "../component/Home/Hero"
import Locations from "../component/Home/Locations"
import NewArrivals from "../component/Home/NewArrivals"
import Places from "../component/Home/Places"
import SpecialOffer from "../component/Home/SpecialOffer"
import Contact from "./Contact"





function Home() {


  return (
   <div>
     <Hero/>
     <Places/>
     <Locations/>
     <BestProducts/>
     <SpecialOffer/>
     <Contact/>
     <NewArrivals/>
  

  
 
   </div>
  )
}

export default Home
