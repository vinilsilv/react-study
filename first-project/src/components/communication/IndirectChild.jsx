import React from "react";

export default (props) => {
  const cb = props.whenClicked;
  return (
    <div>
      <div>Child</div>
      <button onClick={() => cb("John", 53, true)}>Send info</button>
    </div>
  );
};
