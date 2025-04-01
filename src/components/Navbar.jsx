import React from 'react'

const Navbar = () => {
  return (
     <nav class="sticky top-0 z-1000 ">
                <div class="bg-black text-white flex justify-between pl-40 pr-18 shadow py-10">
                
                    <div class="bold text-4xl flex items-center">Sabnam</div>

                    <div class="flex gap-10 uppercase">
                            <a class="hover:text-amber-400 self-center hover:underline underline-offset-6 decoration-white" href="#home">Home</a>
                            <a class="hover:text-amber-400 self-center" href="/about.html">About</a>
                            <a class="hover:text-amber-400 self-center" href="#">Gallery</a>

                            <div class="relative group self-center flex">
                                <a class="hover:text-amber-400 flex self-center" href="#">
                                    Pages
                                    <i class="fa-solid fa-angle-down ml-1 self-center"></i>
                                </a>
                            
                                {/* <!-- PAGES DROPDOWN ON HOVER --> */}
                                <div class="absolute border rounded-lg mt-o.5 z-10 left-0 top-full hidden w-25 bg-white text-black  group-hover:block border"
                                >
                                    <ul class="py-2 text-sm">
                                        <li>
                                            <a href="#" class="block hover:bg-gray-300 hover:font-semibold px-4 py-2 border-b-dashed border-black">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block hover:font-semibold hover:bg-gray-300 px-5 py-3 ">Project</a>
                                        </li>
                                    </ul>
                                </div>
                            </div> 
                            
                            <a class="py-2 hover:text-amber-500 self-center" href="contact.html">Contact</a>
                            <buttoon class="flex items-center cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                 <span class=" border-2 border-yellow-600 px-5 py-2 rounded-sm hover:text-amber-400">Hire Me
                                    <i class="fa-solid fa-angles-right"></i>
                                 </span>
                               
                            </buttoon>
                    </div>   
                </div>
        </nav>

  )
}

export default Navbar