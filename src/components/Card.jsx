import React from "react";

const Card = (props) => {
  return (
    <div className="text-black bg-white shadow-white flex flex-col justify-center items-center rounded-xl gap-5 p-3">
      <h1 className="text-xl font-bold ">{props.title}</h1>
      <img src={`${props.path} `} className="h-[200px] w-[200px] rounded" />
      <p className="text-xl font-semibold w-[200px]">{props.description}</p>
      <button className="bg-blue-500 text-white font-bold text-xl px-3 py-2 rounded-lg mt-5">
        {props.button}
      </button>
    </div>
  );
};

export default Card;
