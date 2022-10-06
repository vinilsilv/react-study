import React from "react";

export default (props) => {
  const isEven = props.number % 2 === 0;
  return (
    <div>
      {props.number} is
      {isEven ? <span> Even</span> : <span> Odd</span>}
    </div>
  );
};
