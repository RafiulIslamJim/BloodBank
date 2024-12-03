import Navbar from "../components/header/Navbar";
import ScrollingText from "../components/header/ScrollingText";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-red-500 overflow-hidden">
      <div>
        <Navbar id ="home"/>
        <ScrollingText/>
      </div>
      <Outlet/>
      <div>
        <Footer />
      </div>
    </div>
  )
}
export default MainLayout;