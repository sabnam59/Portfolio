import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav className="sticky top-0 z-1000 ">
                <div className="bg-black text-white flex justify-between pl-40 pr-18 shadow py-10">
                
                    <div className="bold text-4xl flex items-center">Sabnam</div>

                    <div className="flex gap-10 uppercase">
                            <Link to='/' className="hover:text-amber-400 self-center hover:underline underline-offset-6 decoration-white">Home</Link>
                            <Link to ='/about' className="hover:text-amber-400 self-center" href="/about">About</Link>
                            <Link to="#" className="hover:text-amber-400 self-center">Gallery</Link>

                            <div className="relative group self-center flex">
                                <Link className="hover:text-amber-400 flex self-center" to="#">
                                    Pages
                                    <i className="fa-solid fa-angle-down ml-1 self-center"></i>
                                </Link>
                            
                                {/* <!-- PAGES DROPDOWN ON HOVER --> */}
                                <div className="absolute border rounded-lg mt-o.5 z-10 left-0 top-full hidden w-25 bg-white text-black  group-hover:block"
                                >
                                    <ul className="py-2 text-sm">
                                        <li>
                                            <Link to="#" className="block hover:bg-gray-300 hover:font-semibold px-4 py-2 border-b-dashed border-black">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="block hover:font-semibold hover:bg-gray-300 px-5 py-3 ">Project</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> 
                            
                            <Link to="/contact" className="py-2 hover:text-amber-500 self-center">Contact
                            </Link>
                            <button className="flex items-center cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                 <span className=" border-2 border-yellow-600 px-5 py-2 rounded-sm hover:text-amber-400">Hire Me
                                    <i className="fa-solid fa-angles-right"></i>
                                 </span>
                               
                            </button>
                    </div>   
                </div>
        </nav>

  )
}

export default Navbar