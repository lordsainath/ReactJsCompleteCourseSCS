import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"


const Homepage = () => {
  return (
   <div className="w-[100%] h-[100%] px-20 py-5">
      <Navbar/>
      <HeroSection/>
   </div>
  )
}

export default Homepage