import React from 'react'

const Footer= () => {
  return (
    <div>
          <footer class="bg-black text-white py-7">
        <div class="max-w-6xl mx-auto p-8">
            <div class="grid grid-cols-4 gap-13"> 
                <div>
                    <h1 class="text-3xl font-bold mb-1">Sabnam Karki</h1>
                    <h3 class="text-xl font-semibold mb-4 text-sm">Frontend Developer</h3>
                    <p class="">who enjoys building modern, responsive websites that offer seamless user experiences. Let's create something amazing together!
                    </p>
                </div>

                <div class="flex flex-col space-py-5">
                    <h2 class="Font-semibold text-3xl mb-7 underline underline-offset-4">Quick Links</h2>

                    <ul class="space-y-3 text-sm">
                        <li><a href="/About.html">About</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="/contact.html">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h2 class="Font-bold text-2xl mb-5 underline underline-offset-4">Follow Me</h2>
                    <ul class="flex space-x-4">

                        <li class="text-xl hover:text-gray-400"><a href=""><i class="fa-brands fa-github">
                        </i></a></li>
                        <li class="text-xl hover:text-gray-400"><a href="#"><i class="fa-brands fa-linkedin"></i>
                        </a></li>
                        <li class="text-xl hover:text-gray-400"><a href=""><i class="fa-brands fa-instagram"> </i></a></li>
                        <li class="text-xl hover:text-gray-400"> <a href=""><i class="fa-brands fa-facebook">   </i></a></li>
                    </ul>   
                </div>

                <div class="mb-5">
                    <h2 class="Font-bold text-2xl mb-5 underline underline-offset-4">Contact Me</h2>
                    <p class="text-sm">Interested in working together? Feel free to drop me a message!</p>
                    <p class="pt-2">Email: sabukarke1@gmail.com</p>
                </div>
            </div>

            <div class="mt-20 border-t border-white pt-5">
                <p class="text-center">&copy; 2025 Sabnam karki . All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
