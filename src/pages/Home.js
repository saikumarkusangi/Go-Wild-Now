
import BestProducts from "../component/Home/BestProducts"
import Hero from "../component/Home/Hero"
import NewArrivals from "../component/Home/NewArrivals"
import Places from "../component/Home/Places"
import SpecialOffer from "../component/Home/SpecialOffer"
import Contact from "./Contact"
import Location from "./Location"




function Home() {


  return (
   <div>
     <Hero/>
     <Places/>
     <SpecialOffer/>
     <BestProducts/>
    <NewArrivals/>
    <Contact/>
     
    {/* <Location/> */}
    
  
 
   </div>
  )
}

export default Home
