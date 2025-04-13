import React from "react";
import Aboutcard from "../../components/Aboutcard";

const About = () => {
  const aboutContent = [
    {
      aboutId : "0a3",
      Aboutdescription:
        "Hello! <strong > I’m Sabnam Karki ,</strong>a passionate Frontend Developer with a keen eye for detail and a love for creating seamless user experiences. I specialize in building responsive andinteractive websites using modern web technologies like HTML5,CSS3, JavaScript, and Frameworks or Libraries like React AndTailwind. My journey into web development started with a curiosityabout how websites work, and it quickly grew into a deep passionfor problem-solving and designing intuitive interfaces.",
    },
    {
      aboutId :"0b3",
      Aboutdescription:
        "I’m constantly learning and keeping up-to-date with the latest trends and technologies in the frontend ecosystem, always striving to improve my skills and contribute to the wider development community. I’m driven by the challenge of turning complex ideas into simple, elegant designs, ensuring that the final product both functional and visually appealing. I believe in clean, maintainable code and always put the user experience first, ensuring my projects are accessible and performant.",
    },

  ];

  return (

    <div className="grid grid-cols-1 lg:grid-cols-2 bg-black text-white lg:py-44 xl:px-52 xl:gap-32 
    py-20 px-5 gap-16 md:py-32 md:px-24 md:gap-24 lg:px-14
    ">
      {aboutContent.map((about) => (
        <Aboutcard 
        key={about.aboutId}
        description={about.Aboutdescription} />
      ))}
    </div>
  );
};

export default About;
