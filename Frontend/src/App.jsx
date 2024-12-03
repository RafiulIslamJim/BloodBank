import Blogs from "./components/Blogs"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/header/Navbar"
import ScrollingText from "./components/header/ScrollingText"

function App() {
 

  return (
    <>
    <div className="bg-white">
    <div>
    <Navbar/>
    <ScrollingText/>
    </div>
    <Hero/>
    <Blogs/>
    <Footer/>
    
    </div>
    </>
  )
}

export default App
