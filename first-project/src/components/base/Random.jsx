import React from "react";

export default (props) => {
  const { min, max } = props;
  const random = parseInt(Math.random() * (max - min)) + min;
  return (
    <>
      <h2>Random number:</h2>
      <p>
        <strong>Min value: </strong> {min}
      </p>
      <p>
        <strong>Max value: </strong> {max}
      </p>

      <p>Random number: {random}</p>
    </>
  );
};
