import { Link } from "react-router-dom";
import Login from "../Login";

const Navbar = () => {
  return (
    <div id="home" className="max-w-screen-3xl  mx-auto fixed top-0 left-0 right-0 z-50 ">
      <div className="navbar bg-white justify-around">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm mt-16 bg-[#010d6e] dropdown-content my-44 rounded-box z-[1]  w-52 p-2 shadow text-red-600 font-bold">
               <li className=" hover:bg-red-600 hover:text-[#010d6e] rounded-full"><Link to='/'>Home</Link></li>
               <li className=" hover:bg-red-600 hover:text-[#010d6e] rounded-full"><Link to='/donars'>Donars</Link></li>
              <li className=" hover:bg-red-600 hover:text-[#010d6e] rounded-full"><Link to='/about'>About</Link></li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl text-red-600">SECBloodBond</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-red-600 font-bold">
            <li className="  hover:bg-[#010d6e] hover:text-white   duration-300 cursor-pointer rounded-full"><Link to='/'>Home</Link></li>
            <li className="  hover:bg-[#010d6e] hover:text-white  duration-300 cursor-pointer rounded-full"><Link to='/donars'>Donars</Link></li>
            <li className="  hover:bg-[#010d6e] hover:text-white  duration-300 cursor-pointer rounded-full"><Link to='/about'>About</Link></li>
          </ul>
        </div>
        <div className="">
                <a
                  className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-[#010d6e] duration-300 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>
                <Login />
              </div>
        
      </div>
    </div>
  );
};

export default Navbar;
