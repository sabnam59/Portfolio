import React from 'react'

const About = () => {
  return (
    <div>
      <section class="bg-black text-white">
        <div class="flex justify-center">
          <div class=" font-bold text-5xl mb-20 mt-10">
            <h1 class="uppercase">about me</h1>
          </div>
        </div>

        <div class="grid grid-cols-2  gap-20 py-20  px-38">
          <div class="border border-2 rounded-xl px-7 py-15 mb-10 border-white">
            <p>
              Hello! I’m <strong>Sabnam Karrki , </strong>a passionate Frontend
              Developer with a keen eye for detail and a love for creating
              seamless user experiences. I specialize in building responsive and
              interactive websites using modern web technologies like HTML5,
              CSS3, JavaScript, and Frameworks or Libraries like React And
              Tailwind. My journey into web development started with a curiosity
              about how websites work, and it quickly grew into a deep passion
              for problem-solving and designing intuitive interfaces.
            </p>
          </div>

          <div class="border border-2 border-white rounded-xl px-7 py-15 mb-10">
            <p>
              I’m constantly learning and keeping up-to-date with the latest
              trends and technologies in the frontend ecosystem, always striving
              to improve my skills and contribute to the wider development
              community. I’m driven by the challenge of turning complex ideas
              into simple, elegant designs, ensuring that the final product is
              both functional and visually appealing. I believe in clean,
              maintainable code and always put the user experience first,
              ensuring my projects are accessible and performant.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About