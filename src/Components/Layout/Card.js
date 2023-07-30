import React from "react";

const Card = (props) => {
  return <div className="p-4 border border-gray-300 rounded shadow-lg bg-white"> {props.children} </div>
};

export default Card;
