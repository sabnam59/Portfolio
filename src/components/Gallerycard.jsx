import React from "react";

const Gallerycard = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={`${props.path}`} />
      <p>{props.description}</p>
      <button>{props.button}</button>
    </div>
  );
};

export default Gallerycard;
