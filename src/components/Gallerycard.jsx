import React from "react";

const Gallerycard = (props) => {
  return (
    <div className="flex flex-col items-start gap-14 xl:px-40 p-5 md:pl-20">
      <h1 className="text-2xl font-bold uppercase underline">{props.title}</h1>
      <p className="text-xl xl:text-xl xl:w-[900px] md:w-[600px] lg:w-[700px]">{props.description}</p>
      <img src={`${props.path}`} className="" />
      <button className="bg-white px-3 py-2 text-black rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xl font-semibold">
        {props.button}
      </button>
    </div>
  );
};

export default Gallerycard;
