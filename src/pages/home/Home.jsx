import React from "react";
import { Link } from "react-router-dom";
import cvFile from '../../assets/sabnam.resume.pdf';


const Home = () => {    
  return (
    <>
      <section id="home" className="relative bg-black text-white">
        {/* <div className="relative right-13 top-5   bg-white  bg-[url('/images/myphoto1.png')] rounded-lg"></div>
        <div
          style={{
            backgroundImage: "url('/images/myphoto1.png')",
            height: "300px",
            width: "280px",
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        ></div> */}
    
        <div className="xl:p-40 lg:pt-32 pt-10 p-5 md:p-20 lg:pl-20">
          <h1 className="text-xl sm:text-5xl md:text-4xl font-semibold leading-tight mb-6">
            Hi, I am
            <br/>
            <a href="#" className="text-yellow-500">
              Sabnam Karki
            </a>
          </h1>
          <p className="text-sm mb-9 md:max-w-xl md:text-xl xl:text-2xl">
            A passionate frontend developer who specialize in turning ideas into
            interactive, user-centric websites that look great and work
            seamlessly.
          </p>

          <h2 className="text-2xl font-bold mb-1 lg:text-3xl xl:4xl">Tech Stack:</h2>

          <div className="mb-20 font-semibold lg:text-xl space-x-2 xl:text-2xl">
            <span>React |</span>
            <span>HTML |</span>
            <span>CSS |</span>
            <span>JavaScript |</span>
            <span>Tailwind |</span>
            <span>Git |</span>
          </div>

          <a href={cvFile}download target="_blank" rel="noopener noreferrer">
            {" "}
            <button className="transition delay-150 duration-300  mb-14 ">
              <span className="text-white bg-yellow-600 hover:bg-transparent border-2 border-yellow-600  rounded-lg cursor-pointer px-6 py-3 text-xl font-semibold">
                Download CV
              </span>{" "}
            </button>
          </a>
        </div>
      </section>

      <div className="bg-yellow-600 py-12 text-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto md:max-w-7xl md:pl-20 px-5 gap-9">
          <div className="flex space-x-6">
            <h1 className="font-semibold text-6xl">1</h1>
            <ul className="font-bold lg:text-xl pt-2">
              <li>Coders</li>
              <li>Degree</li>
            </ul>
          </div>

          <div className="flex space-x-6">
            <h1 className="font-semibold text-6xl">3</h1>
            <ul className="font-bold lg:text-xl pt-2">
              <li>Project</li>
              <li>Completed</li>
            </ul>
          </div>

          <div className="flex space-x-6">
            <h2 className="text-6xl font-semibold">1</h2>
            <ul className="font-bold lg:text-xl pt-2">
              <li>Satisfied</li>
              <li>Client</li>
            </ul>
          </div>

          <div className="flex space-x-6">
            <h2 className="text-6xl font-semibold">0</h2>
            <ul className="font-bold lg:text-xl pt-2">
              <li>Finished</li>
              <li>Project</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
