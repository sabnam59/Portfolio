import React from 'react'

const Home = () => {
  return (
    <>
      <section ID="home" class="relative bg-black text-white mt-0.5">
        <div class="absolute right-13 top-5 bg-cover bg-contain flex flex-rows bg-black bg-[url(./images/myphoto1.png)] h-125 w-100 rounded-lg"></div>

        <div class="p-40 pt-30">
          <h1 class="text-xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6">
            H!, This is
            <a href="#" class="text-purple-500">
              Sabnam Karki
            </a>
          </h1>
          <p class="text-lg sm:text-xl mb-7 max-w-xl ">
            A passionate frontend developer who specialize in turning ideas into
            interactive, user-centric websites that look great and work
            seamlessly.
          </p>

          <h2 class="text-2xl font-bold mb-1">Tech Stack:</h2>

          <div class="mb-17 font-semibold">
            <span>React |</span>
            <span>HTML |</span>
            <span>CSS |</span>
            <span>JavaScript |</span>
            <span>Tailwind |</span>
            <span>Git |</span>
          </div>

          <a href="#projects">
            {" "}
            <button class="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-600">
              <span class="px-5 py-3 bg-yellow-600 rounded-lg cursor-pointer px-8 py-3 text-xl font-semibold text-black rounded-lg underline">
                Download CV
              </span>{" "}
            </button>
          </a>
        </div>
      </section>

      <div class="bg-yellow-600 py-18 text-white mt-1">
        <div class="flex max-w-6xl mx-auto px-25 justify-between">
          <div class="flex space-x-6">
            <h1 class="font-semibold text-6xl">1</h1>
            <ul class="font-bold pt-2">
              <li>Coders</li>
              <li>Degree</li>
            </ul>
          </div>

          <div class="flex space-x-6">
            <h1 class="font-semibold text-6xl">3</h1>
            <ul class="font-bold pt-2">
              <li>Project</li>
              <li>Completed</li>
            </ul>
          </div>

          <div class="flex space-x-6">
            <h2 class="text-6xl font-semibold">1</h2>
            <ul class="font-bold pt-2">
              <li>Satisfied</li>
              <li>Client</li>
            </ul>
          </div>

          <div class="flex space-x-6">
            <h2 class="text-6xl font-semibold">0</h2>
            <ul class="font-bold pt-2">
              <li>Finished</li>
              <li>Project</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home