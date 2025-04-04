
import parse from "html-react-parser";
import React from "react";

const Aboutcard = ({ description }) => {
  return (
    <div>
      <p className="border-2 border-white rounded-xl py-14 px-12 text-xl">
        {parse(description)}
      </p>
    </div>
  );
};

export default Aboutcard;
