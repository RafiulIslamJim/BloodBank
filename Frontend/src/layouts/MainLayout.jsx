import Navbar from "../components/header/Navbar";
import ScrollingText from "../components/header/ScrollingText";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-white overflow-hidden ">
      <div>
        <Navbar/>
        <ScrollingText/>
      </div>
      <Outlet/>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
export default MainLayout;