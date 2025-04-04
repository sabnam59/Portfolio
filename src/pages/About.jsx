import React from "react";
import Aboutcard from "../components/Aboutcard";

const About = () => {
  const aboutContent = [
    {
      Aboutdescription:
        "Hello! <strong > I’m Sabnam Karki ,</strong>a passionate Frontend Developer with a keen eye for detail and a love for creating seamless user experiences. I specialize in building responsive andinteractive websites using modern web technologies like HTML5,CSS3, JavaScript, and Frameworks or Libraries like React AndTailwind. My journey into web development started with a curiosityabout how websites work, and it quickly grew into a deep passionfor problem-solving and designing intuitive interfaces.",
    },
    {
      Aboutdescription:
        "I’m constantly learning and keeping up-to-date with the latest trends and technologies in the frontend ecosystem, always striving to improve my skills and contribute to the wider development community. I’m driven by the challenge of turning complex ideas into simple, elegant designs, ensuring that the final product both functional and visually appealing. I believe in clean, maintainable code and always put the user experience first, ensuring my projects are accessible and performant.",
    },

    // shift + alt + f
  ];

  return (

    <div className="grid grid-cols-2 bg-black text-white py-40 px-52 gap-32 h-screen">
      {aboutContent.map((about) => (
        <Aboutcard description={about.Aboutdescription} />
      ))}
    </div>
  );
};

export default About;
