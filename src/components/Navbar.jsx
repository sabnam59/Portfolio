import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburgerMenu, sethamburgerMenu] = useState(false);

  const handleClick = () => {
    sethamburgerMenu(!hamburgerMenu);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black text-white">
        {/* Desktop */}
        <div className="bg-black text-white lg:justify-between xl:pl-40 pl-20 pr-10 xl:pr-16 md:justify-evenly shadow py-10 hidden md:flex">
          <div className="bold text-5xl lg:text-4xl flex items-center md:hidden lg:flex">
            Sabnam
          </div>

          <div className="md:flex gap-10 uppercase sm:hidden  text-white xl:text-xl">
            <Link to="/" className="hover:text-amber-400 self-center">
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-amber-400 self-center"
            >
              About
            </Link>
            <Link to="/gallery" className="hover:text-amber-400 self-center">
              Gallery
            </Link>

            <div className="relative group self-center flex">
              <Link className="hover:text-amber-400 flex self-center" to="#">
                Pages
                <i className="fa-solid fa-angle-down ml-1 self-center"></i>
              </Link>

              {/* <!-- PAGES DROPDOWN ON HOVER --> */}
              <div className="absolute border rounded-lg mt-o.5 z-10 left-0 top-full hidden w-25 bg-white text-black  group-hover:block">
                <ul className="py-2 text-sm lg:text-xl">
                  <li>
                    <Link
                      to="/pages/blog"
                      className="block hover:bg-gray-300 hover:font-semibold px-4 py-2 border-b-dashed border-black"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pages/project"
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
              className="py-2 hover:text-amber-500 self-center"
            >
              Contact
            </Link>
            <button className="flex items-center cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
              <span className=" border-2 border-yellow-600 px-5 py-2 rounded-sm hover:text-amber-400">
                Hire Me
                <i className="fa-solid fa-angles-right"></i>
              </span>
            </button>
          </div>
        </div>

        {/* mobile */}
        <div className="flex justify-between sm:hidden p-5 list-none sticky top-0 z-100">
          <div className="text-xl">Sabnam</div>

          <ul className="hidden md:flex space-x-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="sm:hidden" onClick={handleClick}>
            <Menu />
            {hamburgerMenu ? (
              <ul className="flex flex-col">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
