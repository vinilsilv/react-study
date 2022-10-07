import React from "react";

export default (props) => {
  return (
    <div>
      <span>{props.text} </span>
      <span><strong>{props.number}</strong> </span>
      <span>{props.bool ? 'True' : 'False'}!</span>
    </div>
  );
};
