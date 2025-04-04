import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="mx-auto md:pl-16 px-5 xl:max-w-7xl max-w-6xl xl:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-5 md:gap-20 xl:gap-16">
          <div>
            <h1 className="text-3xl font-bold mb-1">Sabnam Karki</h1>
            <h3 className="text-xl font-semibold mb-4">Frontend Developer</h3>
            <p className="xl:text-xl">
              who enjoys building modern, responsive websites that offer
              seamless user experiences. Let's create something amazing
              together!
            </p>
          </div>

          <div className="flex flex-col space-py-5">
            <h2 className="Font-bold text-2xl xl:text-3xl mb-7 underline underline-offset-4">
              Quick Links
            </h2>

            <ul className="space-y-3 text-l xl:text-xl">
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="#">Gallery</Link>
              </li>
              <li>
                <Link to="#">Project</Link>
              </li>
              <li>
                <Link to="</contact>">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="Font-bold text-2xl xl:text-3xl mb-5 underline underline-offset-4">
              Follow Me
            </h2>
            <ul className="flex space-x-4">
              <li className="text-xl xl:text-2xl hover:text-gray-400">
                <Link to="https://github.com/sabnam59">
                  <i className="fa-brands fa-github"></i>{" "}
                </Link>
              </li>
              <li className="text-xl xl:text-2xl hover:text-gray-400">
                <Link to="https://www.linkedin.com/in/sabnam-karke-3927aa306/">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </li>
              <li className="text-xl xl:text-2xl hover:text-gray-400">
                <Link to="https://www.instagram.com/___sabuuuuu___/">
                  <i className="fa-brands fa-instagram"> </i>
                </Link>
              </li>
              <li className="text-xl xl:text-2xl hover:text-gray-400">
                <Link to="https://www.facebook.com/sabu.karkee.9">
                  <i className="fa-brands fa-facebook"> </i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <h2 className="Font-bold text-2xl xl:text-3xl mb-5 underline underline-offset-4">
              Contact Me
            </h2>
            <p className="xl:text-xl">
              Interested in working together? Feel free to drop me a message!
            </p>
            <p className="pt-3 xl:font-semibold">Email: sabukarke1@gmail.com</p>
          </div>
        </div>

        <div className="mt-20 border-t border-white pt-5">
          <p className="text-center">
            &copy; 2025 Sabnam karki . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
