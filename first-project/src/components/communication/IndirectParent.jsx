import React, { useState } from "react";
import IndirectChild from "./IndirectChild";

export default (props) => {
  const [name, setName] = useState("?");
  let [age, setAge] = useState(0);
  let [isBusy, setIsBusy] = useState(false);
  // name age isBusy
  function sendInfo(name, age, isBusy) {
    setName(name);
    setAge(age);
    setIsBusy(isBusy);
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
