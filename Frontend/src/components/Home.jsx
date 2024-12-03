import Hero from "./Hero"
import Blogs from "./Blogs"
import Totalreg from "./Totalreg"

const Home = () => {
  return (
    <div>
      <Hero/>
      <Blogs />
      <Totalreg/>
      <hr className="w-[88vw]  mx-auto sm:my-15 h-2 bg-gradient-to-r from-[#010d6e] via-red-600 to-white  rounded-full" />
    </div>
  )
}

export default Home
