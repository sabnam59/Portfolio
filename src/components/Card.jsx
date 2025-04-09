import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {


  return (
    // <Link to={`/pages/project/${props.id}`}>

    <div className="text-black bg-white shadow-white flex flex-col justify-center items-center rounded-xl gap-5 p-3 py-8">
      <h1 className="lg:text-xl xl:text-2xl text-l font-bold ">
        {props.title}
      </h1>
      <img
        src={`${props.path} `}
        className="h-[200px] w-[200px] xl:w-[280px] lg:w-[230px] rounded"
      />
      
      {/* <p className="lg:text-xl text-l font-semibold w-[200px]">
          {props.description.slice(0,20)}
        </p> */}

      <Link to={`/pages/${props.dpath}/${props.id}`}>
        <button className="bg-blue-500 text-white font-bold text-xl px-3 py-2 rounded-lg mt-5">
          {props.button}
        </button>
      </Link>
    </div>
  );
};

export default Card;
