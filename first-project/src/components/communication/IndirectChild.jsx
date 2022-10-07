import React from "react";

export default (props) => {
  const cb = props.whenClicked;
  const generateAge = () => parseInt(Math.random() * 20) + 50;
  const generateIsBusy = () => Math.random() > 0.5;
  return (
    <div>
      <div>Child</div>
      <button onClick={() => cb("John", generateAge, generateIsBusy)}>
        Send info
      </button>
    </div>
  );
};
