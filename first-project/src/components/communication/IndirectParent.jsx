import React from "react";
import IndirectChild from "./IndirectChild";

export default (props) => {
  let name = "?";
  let age = 0;
  let isBusy = false;
  // name age isBusy
  function sendInfo(nameParam, ageParam, isBusyParam) {
    name = nameParam;
    age = ageParam;
    isBusy = isBusyParam;

    console.log(nameParam, ageParam, isBusyParam);
  }

  return (
    <div>
      <div>
        <span>{name} </span>
        <span>
          <strong>{age}</strong>{" "}
        </span>
        <span>{isBusy ? "True" : "False"} </span>
      </div>
      <IndirectChild whenClicked={sendInfo} />
    </div>
  );
};
