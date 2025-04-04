
import parse from "html-react-parser";
import React from "react";

const Aboutcard = ({ description }) => {
  return (
    <div>
      <p className="border-2 border-white rounded-xl xl:py-14 xl:px-12 md:text-xl xl:text-2xl p-5 md:p-10 text-sm">
        {parse(description)}
      </p>
    </div>
  );
};

export default Aboutcard;
