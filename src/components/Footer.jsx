import React from 'react'
import { Link } from 'react-router-dom'

const Footer= () => {
  return (
    <div>
          <footer className="bg-black text-white py-7">
        <div className="max-w-6xl mx-auto p-8">
            <div className="grid grid-cols-4 gap-13"> 
                <div>
                    <h1 className="text-3xl font-bold mb-1">Sabnam Karki</h1>
                    <h3 className="text-xl font-semibold mb-4">Frontend Developer</h3>
                    <p className="">who enjoys building modern, responsive websites that offer seamless user experiences. Let's create something amazing together!
                    </p>
                </div>

                <div className="flex flex-col space-py-5">
                    <h2 className="Font-semibold text-3xl mb-7 underline underline-offset-4">Quick Links</h2>

                    <ul className="space-y-3 text-sm">
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="#">Gallery</Link></li>
                        <li><Link to="#">Project</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h2 className="Font-bold text-2xl mb-5 underline underline-offset-4">Follow Me</h2>
                    <ul className="flex space-x-4">

                        <li className="text-xl hover:text-gray-400"> <Link to=""><i className="fa-brands fa-github">
                        </i> </Link>
                        </li>
                        <li className="text-xl hover:text-gray-400"><Link to="#"><i className="fa-brands fa-linkedin"></i>
                        </Link> </li>
                        <li className="text-xl hover:text-gray-400"> <Link to=""><i className="fa-brands fa-instagram"> </i>
                        </Link> </li>
                        <li className="text-xl hover:text-gray-400"> <Link to=""><i className="fa-brands fa-facebook"> </i> 
                        </Link> </li>
                    </ul>   
                </div>

                <div className="mb-5">
                    <h2 className="Font-bold text-2xl mb-5 underline underline-offset-4">Contact Me</h2>
                    <p className="text-sm">Interested in working together? Feel free to drop me a message!</p>
                    <p className="pt-2">Email: sabukarke1@gmail.com</p>
                </div>
            </div>

            <div className="mt-20 border-t border-white pt-5">
                <p className="text-center">&copy; 2025 Sabnam karki . All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
