import React from "react";

export default (props) => {
  return (
    <div>
      <span>
        {props.name} <strong>{props.familyName}</strong>
      </span>
    </div>
  );
};
