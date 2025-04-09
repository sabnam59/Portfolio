import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburgerMenu, sethamburgerMenu] = useState(false);

  console.log(hamburgerMenu);

  const handleClick = () => {
    sethamburgerMenu(!hamburgerMenu);
  };
  

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black text-white ">
        <div
          className="bg-black text-white shadow py-10 px-5 md:pl-20 md:pr-10 
          flex justify-between md:justify-evenly md:flex lg:justify-between xl:pl-40 xl:pr-16 "
        >
          <div className="bold items-center flex text-xl lg:text-4xl xl:text-5xl  md:hidden lg:flex">
            Sabnam
          </div>

          <div className="sm:hidden" onClick={handleClick}>
            <Menu />
          </div>  

          <div
            className={`absolute top-20 right-0 flex flex-col p-5 md:w-full font-semibold gap-4 transition-all md:flex-row
              md:items-center  
              ${
                hamburgerMenu ? "block bg-white text-black" : "hidden md:flex"
              }`
            }
          >
            <Link
              to="/"
              className="hover:text-amber-400 self-center   "
              onClick={handleClick}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-amber-400 self-center"
              onClick={handleClick}
            >
              About
            </Link>
            <Link
              to="/gallery"
              onClick={handleClick}
              className="hover:text-amber-400 self-center "
            >
              Gallery
            </Link>

            <div className="relative group self-center flex">
              <Link to="#" className="hover:text-amber-400 self-center ">
                Pages
                <i className="fa-solid fa-angle-down ml-1 self-center"></i>
              </Link>

              {/* <!-- PAGES DROPDOWN ON HOVER --> */}
              <div className="absolute border rounded-lg mt-o.5 z-10 left-0 top-full hidden w-25 bg-white text-black  group-hover:block">
                <ul className="py-3 text-sm lg:text-xl">
                  <li>
                    <Link
                      onClick={handleClick}
                      to="/pages/blog"
                      className="block  hover:bg-gray-300 hover:font-semibold px-4 py-3 border-b-dashed border-black"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pages/project"
                      onClick={handleClick}
                      className="block hover:font-semibold hover:bg-gray-300 px-5 py-3 "
                    >
                      Project
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              to="/contact"
              onClick={handleClick}
              className="py-2 hover:text-amber-500 self-center"
            ></Link>

            <button
              onClick={handleClick}
              className="items-center cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <span className=" border-2 border-yellow-600 px-5 py-2 rounded-md hover:text-amber-400">
                Hire Me
                <i className="fa-solid fa-angles-right"></i>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
