import React from "react";

export default (props) => {
  return (
    <div>
      <label htmlFor="stepInput">Step: </label>
      <input
        id="stepInput"
        type="text"
        value={props.step}
        onChange={e => props.setStep(+e.target.value)}
      />
    </div>
  );
};
